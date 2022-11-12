import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';




function App() {
  
  const [data, setData] = useState({});
  const [location, setLocation] = useState('Muzaffarpur');

  const searchlocation = (event) =>{
    if (event.key==='Enter'){
     
     axios.get(url).then((response) =>{
        setData(response.data);
        console.log(response.data)
    });
    setLocation('');
    }
  }
  useEffect(()=>{
    axios.get(url).then((response) =>{
      setData(response.data);
    });
  },[location]);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a70ee1b544954b726650a9e6fed44fbc`

  
  return (
    <div className="app">
      <h1 className='heading'>Weather Report</h1>
      <div className='search'> 
      <input onKeyPress={searchlocation} onChange={event=>setLocation(event.target.value)} value={location} type='text' className='input' placeholder='Enter Your City Name' />
      </div>
        
      <div className='container'>
       <div className='top'>
        <div className='location'>
        <p>{data.name}</p>
        </div>
        <div className='temp'>
         {data.main ? <h1>{data.main.temp}℃</h1> : null}
        </div>
        <div className='description'>
        {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        </div>
        <div className='bottom'>
        <div className='feel'>
          {data.main ? <p className='bold'>{data.main.feels_like}℃</p> : null }
          <p>Feel Like</p>
        </div>
        <div className='humadity'>
        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
        <p>Humadity</p>
        </div>
        <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed}.mps</p> : null}
          <p>Wind Speed</p>
        </div>
        </div> 
        

      </div>
    </div>
  );
}

export default App;
