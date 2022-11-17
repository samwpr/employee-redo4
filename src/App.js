import './App.css';
import Employee from './components/Employee.js';
import {useState} from 'react';

function App() {
  const showEmployee = true;
  const [role, setRole] = useState("Dev");
  const [employee, setEmployee] = useState(
    [
    {name: "Sam", role: "Dev", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"},
    {name: "Sam", role: "Dev", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"},
    {name: "Sam", role: "Dev", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"},
    {name: "Sam", role: "Dev", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"},
    {name: "Sam", role: "Dev", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"},
    {name: "Sam", role: "Dev", img:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"}
    ]
  );
  return (
    <div className="App ">
      {showEmployee ? (
        <div className="flex flex-wrap justify-center">
          {employee.map((e) => {
            return(
            <Employee name={e.name} role={e.role} img={e.img}/>
            )
            })};

        </div>
      ) : <p>No Acesss</p>}
     
    </div>
  );
}

export default App;
