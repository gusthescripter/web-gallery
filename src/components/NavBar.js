
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
	return (
		<header>
			<div>
				
				<nav className="relative container mx-auto p-6">
				
				<div className="flex items-center justify-between">
					
					<div className="pt-2">
						<img src="https://www.shareicon.net/data/512x512/2016/11/14/852179_code_512x512.png" width="50px" alt="" />
					</div>
					
					<div className="hidden md:flex space-x-4">
						<NavLink to='/' className="text-red-600 hover:text-red-200">
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
					</div>
					<button id="menu-btn" className=" block hamburger md:hidden focus:outline-none">
						<span className="hamburger-top"></span>
						<span className="hamburger-middle"></span>
						<span className="hamburger-bottom"></span>
					</button>
				</div>
				<div className="md:hidden">
					<div id="menu" className="absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
						<NavLink to='/' className="text-red-600 hover:text-red-200">
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
					</div>
				</div>
				</nav>
			</div>
		</header>
	)
}
