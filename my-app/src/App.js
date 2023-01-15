//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
            MLA Formatter
        </h1>
      </header>
      <body className="App-body">
      <p>
          Input or upload your paper here:
        </p>
        <input type='file' id='fileInput'></input>
        <br></br>
        <button id='uploadButton'>Upload</button>
      </body>
    </div>
  );
}



export default App;
