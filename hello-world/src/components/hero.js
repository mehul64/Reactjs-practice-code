import React from 'react'

export function Hero({name}) {

  if(name === 'joker') {
    throw new Error('not a hero')
  }
  return (
    <div>
      {name}
    </div>
  )
}
