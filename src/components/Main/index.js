import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import './style.scss'

const Main = () => {
	const [devs, setDevs] = useState([])

	useEffect(() => {
		async function loadDevs() {
			const response = await api.get('/devs')

			setDevs(response.data)
		}

		loadDevs()
	}, [devs])

	return (
		<main>
			<ul>
				{devs.map(dev => (
					<li key={dev._id} className='dev-item'>
						<header>
							<img src={dev.avatar_url} alt={dev.name} />
							<div className='user-info'>
								<strong>{dev.name}</strong>
								<span>{dev.techs.join(', ')}</span>
							</div>
						</header>
						<p>{dev.bio}</p>
						<a
							href={`https://github.com/${dev.github_username}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							Access Github Profile
						</a>
					</li>
				))}
			</ul>
		</main>
	)
}

export default Main
