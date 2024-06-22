import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuroraForecast = () => {
    const [kpIndex, setKpIndex] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const response = await axios.get('https://services.swpc.noaa.gov/text/3-day-forecast.txt');
                const forecast = response.data;
                const stripStart = forecast.substring(forecast.indexOf("00-03UT"));
                const kpTable = stripStart.substring(0, stripStart.indexOf("Rationale") - 2);
                const rows = kpTable.split("\n");

                const data = rows.map(row => {
                    const noBrackets = row.replace(/\([^)]+\)/g, "");
                    const dataFormatted = noBrackets.replace(/\s+/g, ' ').trim();
                    const rowData = dataFormatted.split(' ');
                    return {
                        time: rowData[0],
                        day1: rowData[1],
                        day2: rowData[2],
                        day3: rowData[3]
                    };
                });

                if (data[0].time.startsWith("WARNING")) {
                    setError(data[0].time);
                } else {
                    const getSum = (data, field) => {
                        const total = data.reduce((sum, row) => sum + parseInt(row[field]), 0);
                        return Math.round(total / data.length);
                    };

                    const kpIndices = [
                        getSum(data, 'day1'),
                        getSum(data, 'day2'),
                        getSum(data, 'day3')
                    ];
                    setKpIndex(Math.max(...kpIndices));
                }
            } catch (error) {
                setError('Error fetching forecast');
            }
        };

        fetchForecast();
    }, []);

    return { kpIndex, error };
};

export default useAuroraForecast;
