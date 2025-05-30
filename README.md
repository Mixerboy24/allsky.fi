## Allsky.fi Prod versio


Nykyinen repon versio: **Versio: 1.4.3 (Prod)**
- SQL tietokanta korvaa cameras.jsonin
- LGFI poistot
- UKK
- Sisäinen API
- Footer paranneltu

## Miten ajaa allsky.fi?
1. Lataa repo
2. Asenna noden moduulit `npm i`
3. Luo `.env.local` jossa on seuraavat:
```
db_osoite=localhost
db_useri=allsky
db_salasana=PelottavaYks1sarvinen40950!
db_tietokanta=allskyfi
```
4. luo tietokanta ja suorita sinne seuraava:
```
CREATE TABLE cameras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    latitude DECIMAL(8,6) NOT NULL,
    longitude DECIMAL(8,6) NOT NULL,
    imageUrl TEXT NOT NULL,
    cameraUrl TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    authorUrl TEXT NOT NULL
);

INSERT INTO cameras (location, latitude, longitude, imageUrl, cameraUrl, author, authorUrl) VALUES
('Muurame', 62.137400, 25.675100, 'https://muurameallsky.fi/image-resize.jpg', 'https://muurameallsky.fi', 'Mixerboy24', 'https://mixerboy24.fi'),
```
5. Suorita `npm run dev` 

DEV purkki aukeaa http://localhost:3000 osoitteeseen.   
Kartalla pitäisi nyt näkyä Muuramen allsky kamera jos kaikki on oikein.

---
#### Tulevia ominaisuuksia:
- Allsky API (GET, POST) 
- Tumma tila
- Sijainnin asettaminen revontulia varten
- Englannin kieli
- Lomake jolla ilmoittaa uudet kamerat
