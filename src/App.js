import logo from './logo.svg';
import './App.css';
import AlertsManagement from './Component/AlertsManagement';
import MonitorAllAlerts from './Component/MonitorAllAlerts';
// import FilterComponent from './Component/FiltersComponent';
import AlertManagementDashboard from './Component/AlertManagementDashboard';
import PercentageCPUAlert from './Component/PercentageCPUAlerts';
import Summary from './Component/Pages/Summary';
import History from './Component/Pages/History';
import Diagnostics from './Component/Pages/Diagnostics';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <header >
        <PercentageCPUAlert/>
        
      </header>
      <Routes>

              <Route exact path="/"  element={<MonitorAllAlerts/>}  ></Route>
              <Route exact path="monitorallalerts/percentagecpualert"  element={<PercentageCPUAlert/>}  ></Route>
              <Route exact path="/summary"  element={<Summary />}  ></Route>
              <Route path="monitorallalerts/percentagecpualert/history" element={<History/>}></Route>
              <Route path="monitorallalerts/percentagecpualert/diagnostics" element={<Diagnostics/>}></Route>
              
            </Routes>
    </div>
  );
}

export default App;

