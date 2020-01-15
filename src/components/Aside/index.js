import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'

import './style.scss'

const Aside = () => {
	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const { latitude, longitude } = position.coords

				setLatitude(latitude)
				setLongitude(longitude)
			},
			err => {
				console.log(err)
			},
			{
				timeout: 30000
			}
		)
	}, [])

	return (
		<Formik
			initialValues={{
				github_username: '',
				techs: '',
				latitude: latitude,
				longitude: longitude
			}}
			onSubmit={(values, actions) => {
				console.log(values)

				actions.resetForm()
			}}
		>
			{props => (
				<aside>
					<strong>Signup</strong>
					<Form>
						<div className='input-block'>
							<label htmlFor='github_username'>
								Github username
							</label>
							<Field
								name='github_username'
								id='github_username'
							/>
						</div>

						<div className='input-block'>
							<label htmlFor='techs'>Technologies</label>
							<Field name='techs' id='techs' />
						</div>

						<div className='input-group'>
							<div className='input-block'>
								<label htmlFor='latitude'>Latitude</label>
								<Field
									type='number'
									name='latitude'
									id='latitude'
									value={(props.values.latitude = latitude)}
								/>
							</div>

							<div className='input-block'>
								<label htmlFor='longitude'>Longitude</label>
								<Field
									type='number'
									name='longitude'
									id='longitude'
									value={(props.values.longitude = longitude)}
								/>
							</div>
						</div>

						<button type='submit'>Save</button>
					</Form>
				</aside>
			)}
		</Formik>
	)
}

export default Aside
