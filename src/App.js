import logo from './logo.svg';
import './App.css';
import DataCards from './COMPONENTS/DataCards';

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ backgroundColor: "gray",fontFamily:"Cursive" }}>Profile Cards Project</h1>
        <div style={{ padding: "10px" }}>
          <DataCards />
        </div>
      </div>
    </div>

  );
}

export default App;
