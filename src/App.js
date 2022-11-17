import { useEffect } from 'react';
import { facebookInit, facebookLogin } from './services/facebook';

useEffect(() => {
  facebookInit();
}, []);


function App() {
  return (
    <div className="App">
      <h1>Facebook login</h1>
      <button  onClick={facebookLogin}>
        facebook login
        
      </button>
    </div>
  );
}

export default App;
