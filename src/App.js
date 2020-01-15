import React from 'react'

import './global.scss'
import './App.scss'

import Head from './components/Head'
import Aside from './components/Aside'
import Main from './components/Main'

function App() {
	return (
		<>
			<Head />
			<div id='app'>
				<Aside />
				<Main />
			</div>
		</>
	)
}

export default App
