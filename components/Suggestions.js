import React, { useEffect, useState } from 'react'
import faker from 'faker'

function Suggestions() {
	const [suggestions, setSuggestions] = useState([])

	useEffect(() => {
		const suggestions = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}))
		setSuggestions(suggestions)
	}, [])

	return (
		<div className='ml-6 border bg-white pl-4 rounded-b-lg drop-shadow-xl'>
			<div className='flex justify-start'>
				<span className='text-gray-500'>Suggestions for you</span>
			</div>

			{suggestions.map((profile) => (
				<div
					key={profile.id}
					className='flex justify-between items-center mt-3 mb-3'
				>
					<div className='flex items-center space-x-2'>
						<img
							src={profile.avatar}
							className='h-10 w-10 rounded-full border p-[2px]'
						/>
						<span className=' justify-self-start'>
							{profile.username}
						</span>
					</div>
					<button className='justify-self-end text-blue-500 mr-2'>
						+ Follow
					</button>
				</div>
			))}
		</div>
	)
}

export default Suggestions
