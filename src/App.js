import logo from './logo.svg'
import DATA from "./MOCK_DATA.js";
import './App.css'
import Chart from './Components/Chart';
import { BasicTable } from './Components/BasicTable';
import { FilteringTable } from './Components/FilteringTable';

function App() {
  return (
    <div className="App">
      <Chart/>
      <FilteringTable/>
      <div className="App-data">
      </div>
    </div>
  )
}

export default App
