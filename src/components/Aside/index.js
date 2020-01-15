import React from 'react'
import { Formik, Form, Field } from 'formik'

import './style.scss'

const Aside = () => {
	return (
		<Formik
			initialValues={{
				github_username: '',
				techs: '',
				latitude: '',
				longitude: ''
			}}
			onSubmit={values => {
				console.log(values)
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
								<Field name='latitude' id='latitude' />
							</div>

							<div className='input-block'>
								<label htmlFor='longitude'>Longitude</label>
								<Field name='longitude' id='longitude' />
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
