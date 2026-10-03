import React from 'react'
import Card from './components/Card'

const data = [
              {
                username: "Darshil Doshi",
                age: 12,
                bio: "The gym guy who is the best"
              },
              {
                username: "Dev Doshi",
                age:21,
                bio:"React developer and who loves to code"
              },
              {
                username: "Purva Pandya",
                age:21,
                bio:"A enjoyable person who loves to travel"
              },  
              {
                username: "Het patel",
                age:24,
                bio:"A boy who want to get married and loves to travel"
              },  
              {
                username: "krishna patel",
                age:29,
                bio:"A boy who is still single and finding a girl"
              },  
]

const App = () => {
  return (
    <div className='parent'>
      {data.map((dt, index) => (
        <Card 
          key={index} 
          username={dt.username} 
          age={dt.age} 
          Bio={dt.bio} 
        />
      ))}
    </div>
  )
}

export default App