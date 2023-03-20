import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friend from './Friend'
import External from './External';

const friendList = [
  {
    name: "Mozammel",
    phone: "+888880",
  },
  {
    name: "Moza",
    phone: "+88999",
  },
  {
    name: "zammel",
    phone: "+11128880",
  },
]

function App() {
  const friends = ["Mozammel", "Naser", "Sharup", "Sultana"]

  const [count, setCount] = useState(0);
  const countIncrease = () => setCount(count + 1);
  const countDecrease = ()=> setCount(count-1);

  const [name, setName] = useState('Imran');
  const randomName = () => setName(friends[Math.floor(Math.random()* friends.length)])


  // load data using api 
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])
  
  return (
    
    <div className='app'>
    {/* {
      friendList.map(friend => <Friend name={friend.name} phone={friend.phone}></Friend>)
    } */}

    {/* use state  */}
    <p>{count}</p>
    <button onClick={countIncrease}>Increase</button>
    <button onClick={countDecrease}>Decrease</button>

    <p>{name}</p>
    <button onClick={randomName}>Random Name</button>
    {/* <Friend name="Mozmmeml" phone="+0711499999" > </Friend> */}

    {
      users.map(user=><External nam={user.name} email={user.email}></External>)
    }

    </div>
  )
}

export default App
