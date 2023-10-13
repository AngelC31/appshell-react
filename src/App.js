
import './App.css';

function App() {
  const lista = document.querySelector("#lista");
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      let html = "";
      json.forEach(user => {
        html += `<div class="card">
            <h2>${user.name}</h2>
            <div>${user.email}</div>
            </div>`
      })
      lista.innerHTML=html;
    })
  return (
    <div className="App">
      <body>
        <header>
          Lista
        </header>
        <div id="lista"></div>
      </body>
      <footer>
        <h3>Hecho por Angel Cruz de IDGS10A</h3>
      </footer>
    </div>
  );
}

export default App;
