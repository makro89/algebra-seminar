import React, { useState } from "react";
import "./About.css";
import appLogo from "../Components/Images/Juventus_logo.png";



  const About = () => {
  
  
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="asd">
        <h1 className="font-weight-bold">Svi već znaju, ali ako ima neki zalutali ovdje, da nauči!</h1>
                    <p>

                    Juventus F.C. iz Torina, poznatiji i kao Juve, najtrofejniji je i najpopularniji talijanski nogometni klub. "Stara dama" talijanskog nogometa (La vecchia Signora) klub je koji u Italiji ima preko 10 milijuna navijača, što je uvjerljivo najviše od svih talijanskih klubova jer Inter i Milan po broju navijača zajedno imaju koliko i Bianconeri. U svijetu Juve ima oko 170 milijuna navijača, iako neka istraživanja govore i o puno većoj brojki koja doseže i 200 milijuna, a veliki je broj Juventina na dalekom istoku, primjerice u Indoneziji ima oko 15 milijuna navijača Juventusa.

                    </p>
                    <p>
                    Juventus ne samo da je najpopularniji talijanski klub, Juventus je i najtrofejniji talijanski klub s preko 50 službenih trofeja u raznim natjecanjima, što talijanskim, što europskim.
                    </p>
                    <p>
                    Nakon osvajanja Interkontinentalnog kupa 1996. godine, Juventus je postao prvi i do sada jedini klub u povijesti nogometa koji je uspio osvojiti sve naslove prvaka u domaćim i međunarodnim natjecanjima. Prema rang listi Međunarodne federacije za nogometnu statistiku i povijesti, FIFA-ine organizacije, Juventus je najbolji talijanski klub i drugi najbolji europski klub u 20. stoljeću.
                    </p>
                    <p>
                    Klub je 1. studenog 1897. godine osnovala grupa učenika torinske škole za književnost "Massimimo D'Azeglio". Svi osnivači bili su starosti od četrnaest do sedamnaest godina i oni su, kako legenda kaže, došli do ideje da osnuju nogometni klub dok su sjedili na klupi u parku "Corso Re Umberto".
                    </p>
                    <p>
                    Postoji veoma malo pisanih tragova o samom rođenju novog kluba jer u to vrijeme novine nisu previše prostora posvećivale sportu. Jedan od osnivača, Enrico Canfari je kasnije (1914. godine) u jednom dokumentu opisao cijelu stvar. Grupa je raspravljala o imenu kluba i nakon brojnih glasanja došli su do tri varijante: Società Via Fori, Società Sportiva Massimo D' Azeglio i Sport Club Juventus. Zadnje rješenje je izabrano kao najbolje.
                    </p>
                    <p>
                    Prvi predsjednik kluba je bio Eugenio Canfari (brat Enrica). Oni su zajedno igrali u drugom klubu iz Torina, Piazza D'Armi. Juventus je promijenio ime u Nogometni Klub Juventus 1899. godine i prva boja dresova je bila ružičasta i crna, u Italiji poznata kao rosanero.
                    </p>
        
        </div>
        <div className="col-lg-7">
          <img className="mb-4 appLogo" src={appLogo} alt="App logo" />
        </div>
      </div>
     
      
    </div>
  );
}

export default About;