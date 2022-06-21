import { useEffect, useState } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Rocket from './components/Rocket/Rocket';
import Status from './components/Status/Status';
import Footer from './components/Footer/Footer';

import active from './assets/rocketActive.svg';
import destroyed from './assets/rocketDeactivate.svg';
import unknown from './assets/rocketUnknown.svg';

function App() {
  const [ rockets, setRockets ] = useState();

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/capsules')
      .then((response) => response.json())
      .then((rocket) => setRockets(rocket));
  }, []);

  return (
    <div className="App">
      <Header />

      <h2>Capsules status:</h2>
      <section className='statusSection'>
        <Status img={active} txt='Active' gradient={{ backgroundImage: 'linear-gradient(to bottom, #CE9FFC, #7367F0)'}}/>
        <Status img={destroyed} txt='Destroyed' gradient={{ backgroundImage: 'linear-gradient(to bottom, #65799b, #5e2563)'}}/>
        <Status img={unknown} txt='Unknown' gradient={{ backgroundImage: 'linear-gradient(to bottom, #7117ea, #ea6060)'}}/>
      </section>
      
      <h2>All Capsules:</h2>
      <section className='allCapsules'>
        {rockets?.map(rocket => <Rocket
          key={rocket.capsule_serial}
          serial={rocket.capsule_serial}
          details={rocket.details}
          status={rocket.status}
        />)}
      </section>

      <Footer />
    </div>
  );
}

export default App;
