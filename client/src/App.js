import {useEffect,useState} from 'react'

function App() {

  const [Data,setData] = useState([{}])

  useEffect(()=>{
    fetch("/api",{mode: 'no-cors'})
    .then(
      res=>res.json()
    ).then(
      data=>setData(data)
    )
  },[])

  return (
    <div className="start">
      {Data.map((data,id)=>(
        <div key={id}>
          <h1>COLOR = {data.color}</h1>
          <p1>HASH = {data.value}</p1>
        </div>
      ))}
    </div>
  );
}

export default App;
