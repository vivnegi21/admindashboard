import React from 'react'

const App = async () => {
  const data = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json').then((data)=>data.json());


  

  return (
    <div>App</div>
  )
}

export default App