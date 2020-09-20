import React from 'react'

export function Person({person}) {
	return (
		<div>
			<h2>
				I am {person.name}.i am {person.age} years old.
			</h2>	
		</div>
	)
}
