import logo from './logo.svg';
import './App.css';

async function testButton() {
/*
  const response = await fetch("/backend/signin", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      username: "user1",
      password: "password1"
    })
  })
*/
  const response = await fetch("/backend/login", {
    method: "get",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  console.log(response);
  const text = await response.text();
  console.log(text);
  //const raw = response.headers.raw()['set-cookie'];
  //console.log(raw);

/*
  fetch("/backend/signin", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      username: "user1",
      password: "password1"
    })
  })
  .then( (response) => { 
      console.log(response)
      console.log(response.text)
  });
*/
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Business-Quebec
        </p>
{/*Add language switch*/}
        <p>
          We make you a website for free!
          You pay only if you want extra features.
        </p>
        <p>
          On vous fabrique un site web gratuitement!
          Vous payez seulement pour les fonctionalite avancees.
        </p>
        <button onClick={testButton}>
          Hey Test Login!!!!
        </button>
      </header>
    </div>
  );
}

export default App;
