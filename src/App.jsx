import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friend from './Friend'

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

  return (
    
    <>
    {
      friendList.map(friend => <Friend name={friend.name} phone={friend.phone}></Friend>)
    }
    {/* <Friend name="Mozmmeml" phone="+0711499999" > </Friend> */}
    </>
  )
}

export default App
