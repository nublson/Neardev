import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => {
	return (
		<Helmet>
			<meta charSet='utf-8' />
			<title>Neardev</title>
			<link rel='canonical' href='http://mysite.com/example' />
			<meta name='description' content='A Google Maps for Developers' />
		</Helmet>
	)
}

export default Head
