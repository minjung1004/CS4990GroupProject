//import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

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
      (Sources must be formatted manually!)
        </p>
        <p>
        Select a .docx file:
        </p>
        <Button variant="contained" component="label">
  <input type="file" />
</Button>
        <br></br>
        <p>
        <Button variant="contained">Convert to MLA</Button>
        </p>
<p>
<CircularProgress />
</p>
<p>
        <Button variant="contained">Download Converted File</Button>
        </p>
      </body>
    </div>
  );
}



export default App;