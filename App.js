import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState,useEffect } from 'react'

function App() {
  const [data, setdata] = useState([])
  useEffect(()=>{
    
    axios.get("http://localhost:3000/products")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },[])
  return (
    <div className="App">
      <div className='row'>
        <div className='col-xl-4'>
        </div>
        <div className='col-xl-4'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>name</th>
                <th scope='col'>category</th>
                <th scope='col'>manufacturer</th>
                <th scope='col'>price</th>
                <th scope='col'>type</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e)=>{
                return (
                  <>
                    {e.price>=6&& <>

                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.category}</td>
                    <td>{e.manufacturer}</td>
                    <td>{e.price}</td>
                    <td>{e.type}</td>
                  </tr>
                    </>}
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
