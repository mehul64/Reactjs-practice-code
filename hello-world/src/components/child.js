import React from 'react'
import {Parent} from './parent'


export function Child(props) {
  return (
    <div>
			<button onClick = {() => props.greetHandler('child')}>Greet</button>
    </div>
  )
}
