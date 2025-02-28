## Allsky.fi DEV versio

**Allsky.fi** verkkosivusto on paikka josta löytää kaikki julkiset taivaskamerat. Kamerat sijaitsevat eri puolilla suomea ja kameroita ylläpitää niin tähtitieteelliset yhdistykset, yliopistot, tutkimuslaitokset kuin yksittäiset yhtiöt.   

Osa kameroista voi olla kesäkauden tauolla jolloin kameroiden kuvat voivat olla "jumahtanut" huhtikuuhun. Suomessa havaintokausi kestää Syyskuusta - Huhtikuuhun. 

**Allsky.fi** on ilmainen ja mainosvapaa sivusto. Kuka tahansa voi ilmoittaa oman taivaskameransa sivustolle. 

Sivuston ylläpitämisestä vastaa [Atte "Mixer" Oksanen](https://mixerboy24.fi).


### Kuinka lisään uuden kameran kartalle?

Jotta voin lisätä kameran verkkosivulle ja osaksi Suomen Allsky verkkoa. Täytä alla oleva JSON koodi ja toimita se issuena tai sähköpostitse atte.oksanen@allsky.fi.   
Otsikoi [Issue](https://github.com/Mixerboy24/allsky.fi/issues/new) tai sähköposti: **Uusi kamera: Paikkakunta**

```json
    {
        "location": "Kameran paikkakunta",
        "latitude": "koordinaatti",
        "longitude": "koordinaatti",
        "imageUrl": "Kameran kuvan jpg URL",
        "cameraUrl": "Kameran julkinen kotisivu",
        "author": "Kameran omistaja",
        "authorUrl": "Omistajan verkkosivu"
    }
```

*Mikäli koodistasi puuttuu kenttiä, sitä ei julkaista.* 

### Ohjeet:

**Sijainti:** Sijainnin on oltava kunta, jossa kamera sijaitsee, tai lähin suurempi kunta/kaupunki.    
**Koordinaatit:** Koordinaatit voivat olla likimääräisiä, kunhan ne ovat kunnassa, jossa kamera sijaitsee. Koordinaatit ilmoitetaan XX.XXXXX muodossa.    
Esim Muuramen Allsky: 
```json
      "latitude": 62.1374,
      "longitude": 25.6751,
```   
**Kuvan URL:** Kuvan URL:n on tuettava HTTPS:ää ja oltava julkisesti saatavilla.   
**Kameran URL:** Ei pakollinen, mutta suositeltava, jotta kävijät voivat vierailla kameran sivustolla.   
**Tekijä:** Pakollinen tieto. Mielellään kameran omistaja. Esimerkiksi yhdistys tai etu- ja sukunimi + lempinimi.   
**Tekijän URL:** Suositeltava, jotta kävijät voivat vierailla sivustollasi.   

---
#### Tulevia ominaisuuksia:
- Allsky API (GET, POST) 
- Tumma tila
- Sijainnin asettaminen revontulia varten
- Englannin kieli
- Lomake jolla ilmoittaa uudet kamerat
