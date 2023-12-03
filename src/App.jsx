
import React, { useEffect, useState } from 'react'
import Main from './components/Main';

const App = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then(resp => resp.json())
      .then((arr)=>{
        const tmp = arr.filter((d)=>{
          d['checked']=false;
          return {d};
        })
        setData(tmp);
      })
  }, [])

  return (
    <Main data = {data} setData={setData}/>
  )
}

export default App