import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
	const [tours, setTours] = useState([])
	const [loading, setLoading] = useState(true)

	function removeTour(tourID) {
		setTours((prevTours) => prevTours.filter((tour) => tour.id !== tourID))
	}

	async function fetchTours() {
		setLoading(true)

		const data = await fetch(url)
		const jsonData = await data.json()
		setTours(jsonData)

		setLoading(false)
	}

	useEffect(() => {
		fetchTours()
	}, [])

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}

	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	)
}

export default App
