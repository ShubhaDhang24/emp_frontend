

import { BrowserRouter  as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
   
    <div>
      <Router>
        <Routes>
          <Route  path= "/" component={EmployeeList}></Route>
          <Route  path="/employee" component={EmployeeList}></Route>
        
        
        </Routes>
        <EmployeeList/>
     
        </Router>
  
    </div>
  
  );
}

export default App;
