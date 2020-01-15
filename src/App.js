import React from 'react'

import './global.scss'
import './App.scss'

import Aside from './components/Aside'
import Main from './components/Main'

function App() {
	return (
		<div id='app'>
			<Aside />
			<Main />
		</div>
	)
}

export default App
