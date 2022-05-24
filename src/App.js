import React, {useState, useEffect} from 'react';
import Background from './components/Background'
import logo from './logo.png';
import logo2 from './logo512.png';
import './App.css';
import "@lottiefiles/lottie-player";




function App() {

  const [load, setload ] = useState(false);

  useEffect(() => {
    setload(true)
    setTimeout(() => {
      setload(false)
    }, 2500);
  },[])
  return (
    <div className="App">
      {
        load ? 
        (
          <div className="App-header"> 
            <picture>
              <source media="(max-width: 799px)" srcset={logo2} width={"100%"} height={"100%"}/>
              <source media="(min-width: 800px)" srcset={logo} width={"43%"} height={"100%"}/>
              <img className="App-logo" src={logo} title="logo" alt="Loading-Logo" />
            </picture>
          </div>
        ) :
      (<div>
        <div id="background">
          const root = ReactDOM.createRoot(document.getElementById('background'));
          root.render(
          <React.StrictMode>
            <Background />
          </React.StrictMode>
        );

        </div>
        <footer className='footer'>
          <h1>Capsule Corp.</h1>
        </footer>
        </div>
      )
      }
    </div>
  );
}

export default App;

