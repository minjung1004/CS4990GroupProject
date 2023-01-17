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
          Upload your paper here:
        </p>
        <input type='file' id='fileInput'></input>
        <br></br>
        <button id='uploadButton'>Upload</button>
        {/* 1. add upload function
            2. read file from upload
            3. change format of file to MLA
            4. output MLA formatter file

        */ }
      </body>
    </div>
  );
}

export default App;


