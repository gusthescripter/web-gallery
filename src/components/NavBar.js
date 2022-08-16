
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
	return (
		<header>
			<div>
				<nav>
					<NavLink to='/'>
						Home
					</NavLink>
					<NavLink to='/Project'>
						Projects
					</NavLink>
					<NavLink to='/Post'>
						Posts
					</NavLink>
					<NavLink to='/about'>
						About
					</NavLink>
				</nav>
			</div>
		</header>
	)
}
