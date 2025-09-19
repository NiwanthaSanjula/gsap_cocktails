import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger:{
				trigger:'nav',
				start: 'bottom top'
			}
		});

		navTween.fromTo('nav', 
			{ 
				backgroundColor: 'transparent',
			}, //how it will start

			{
				backgroundColor: 'rgba(255, 255, 255, 0.1)',
				backdropFilter: 'blur(8px)',
				borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
				duration: 1,
				ease: 'power1.inOut'
			} // How it will end
		)
	})


  return (
	<nav className=''>
		<div>
			<a href="#home"
			   className='flex items-center gap-2'
			>
				<img src="/images/logo.png" alt="logo"/>
				<p className='text-green-600'>
					Velvet Pour
				</p>
			</a>

			<ul>
				{navLinks.map((link) => (
					<li key={link.id}>
						<a href={`#${link.id}`}>{link.title}</a>
					</li>
				))}
			
			</ul>
		</div>
	</nav>
  )
}

export default Navbar
