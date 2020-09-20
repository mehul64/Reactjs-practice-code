import React,{useState} from 'react'

function HookCounter2() {
  const initialCount = 0
  const [count,setCount] = useState(initialCount)

  const increamentFive = () => {
    for (let i=0 ; i<5 ; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      count : {count}
      <buton onClick = {() => setCount(initialCount)}>Reset</buton>
      <buton onClick = {() => setCount(prevCount => prevCount + 1)}>Increament</buton>
      <buton onClick = {() => setCount(prevCount => prevCount - 1)}>Decrement</buton>
      <buton onClick = {increamentFive}>Increament 5</buton>
    </div>
  )
}

export default HookCounter2
