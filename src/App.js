import React,{useState} from "react";
import './App.css';
import data from "./intern-data.json";

const App = () => {
const [interns, setInterns] = useState(data)

  return (

    <div className="app-container">
      <h1 class='learn'>Learnable Interns Leaderboard</h1>
   <table>
  
    <tr >
    <th>id</th>
    <th>Full Name</th>
    <th>Phone Number</th>
    <th>Email</th>
    <th>Learning Path</th>
    <th>Overall Task Score</th>
    </tr>
   
   <tbody>

    {interns.map((interns)=>( 
    
    <tr>
      <td>{interns.id}</td>
      <td class='see' >{interns.fullName}</td>
      <td>{interns.phoneNumber}</td>
      <td class='see' >{interns.email}</td>
      <td>{interns.learningPath}</td>
      <td class='see' >{interns.overallTaskScore}</td>
    </tr>))}
   
   </tbody>
   </table>
    </div>
  );
}

export default App;
