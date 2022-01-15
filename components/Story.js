import React from 'react'

function Story({ img, username }) {
	return (
		<div>
			<img
				src={img}
				alt=''
				className='h-10 w-10 rounded-full border-2 border-red-500 p-[0.5px]
				cursor-pointer hover:scale-110 transition transform duration-250 ease-out'
			/>
			<p className='w-14 truncate text-center'>{username}</p>
		</div>
	)
}

export default Story
