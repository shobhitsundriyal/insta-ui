import React, { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'

function Stories() {
	const [suggestions, setSuggestions] = useState([])

	useEffect(() => {
		const suggestions = [...Array(18)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}))
		setSuggestions(suggestions)
	}, [])

	return (
		<div
			className='flex space-x-2 p-6 mt-8 border-gray-200 border bg-white overflow-x-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500
			scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-xl'
		>
			{suggestions.map((profile) => (
				<Story
					key={profile.id}
					img={profile.avatar}
					username={profile.username}
				/>
			))}
		</div>
	)
}

export default Stories
