'use client';
import { useState } from "react";

const About = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => setOpenFAQ(prev => prev === index ? null : index);

  const faqs = [
    { question: "How often is the website updated?", answer: "The website is updated automatically as new data comes in, but manual updates may be done periodically for maintenance." },
    { question: "Can I contribute to the project?", answer: "Yes! You can contribute by submitting an issue or pull request on our GitHub repository." },
    { question: "Is there an API available?", answer: "Currently, we do not offer a public API, but data access can be discussed by contacting the webmaster." },
    { question: "How can I report incorrect or outdated data?", answer: "If you notice incorrect or outdated data, please contact the webmaster via email or open an issue on our GitHub repository." },
    { 
      question: "How to Add a New Camera to the Map?", 
      answer: (
        <>
          <p>To add your camera to our map, please send the following details to webmaster email or create an issue on <a 
            href="https://github.com/Mixerboy24/allsky.fi/issues/new?template=lisaa_kamera.yaml" 
            className="text-blue-500 hover:underline" 
            target="_blank" 
            rel="noopener noreferrer">
              GitHub
            </a> and include the details:</p>
            <pre className="bg-gray-300 p-4 rounded-lg">
              {JSON.stringify({
                location: "Camera City",
                latitude: "Camera Location",
                longitude: "Camera Location",
                imageUrl: "Camera jpg url",
                cameraUrl: "Camera public site",
                author: "Camera Owner",
                authorUrl: "Author homepage"
              }, null, 2)}
          </pre>
        </>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 pt-20 min-h-screen pb-20">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      
      <h2 className="text-xl font-semibold mt-6">Website Contact</h2>
      <p>contact@allsky.fi</p>
      
      <h2 className="text-xl font-semibold mt-6">Webmaster</h2>
      <p>Atte Oksanen / Mixerboy24</p>
      <p>atte.oksanen@allsky.fi</p>
      
      <h2 className="text-xl font-semibold mt-6">Website Hosting</h2>
      <div className="flex justify-start">
              <a
              href="https://lakkahost.fi?track=allskyfi"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/LakkaHost_logo_Musta.svg"
                alt="LakkaHost Logo"
                className="w-250 h-100"
                style={{ width: '160px', height: '60px' }}
              />
            </a>
          </div>
      
      {/* FAQ Section */}
      <h2 className="text-xl font-semibold mt-6">Frequently Asked Questions (FAQ)</h2>
      <div className="space-y-4 mt-4 pb-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pt-2">
            <button 
              className="text-lg font-medium w-full text-left focus:outline-none" 
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {openFAQ === index && <div className="mt-4">{faq.answer}</div>}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6">Dependencies:</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li className="text-black"><a className="text-blue-500 hover:underline" href="https://www.openstreetmap.org" target="_blank" rel="noopener noreferrer">OpenStreetMap</a></li>
          <li className="text-black"><a className="text-blue-500 hover:underline" href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer">Leaflet</a></li>
          <li className="text-black"><a className="text-blue-500 hover:underline" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a></li>
          <li className="text-black"><a className="text-blue-500 hover:underline" href="https://www.swpc.noaa.gov/" target="_blank" rel="noopener noreferrer">SWPC NOAA</a></li>
        </ul>
    </div>
  );
};

export default About;