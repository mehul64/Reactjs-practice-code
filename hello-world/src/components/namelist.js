import React from 'react'
import {Person} from './person'

export function Namelist() {
	
	const persons = [
		{
			id 		: 1,
			name 	: 'bruce',
			age 	: 30
		},
		{
			id 		: 2,
			name 	: 'Mark',
			age 	: 12
		},
		{
			id 		: 3,
			name 	: 'Harry',
			age 	: 34
		}
	]
	const personlist = persons.map(person => <Person key = {person.id} person = {person} />)
	return (
		<div>{personlist}</div>
	)
}
