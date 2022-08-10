
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
					<NavLink to='/about'>
						About
					</NavLink>
					<NavLink to='/Project'>
						Project
					</NavLink>
				</nav>
			</div>
		</header>
	)
}
