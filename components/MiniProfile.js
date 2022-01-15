import React from 'react'

function MiniProfile() {
	return (
		<div
			className='flex items-center justify-between mt-14 ml-6
    border bg-white rounded-t-xl p-5 space-x-4'
		>
			<img
				src='https://yt3.ggpht.com/yti/APfAmoEQi63JxywnIUwqtgy7xVB2ytIbi3ErPxBeh2Tg=s88-c-k-c0x00ffffff-no-rj-mo'
				alt=''
				className='h-12 w-12 rounded-full border p-[2px]'
			/>
			<div>
				<h1 className='truncate font-semibold'>shobhitsundriyal1</h1>
				<h1 className='text-gray-400 font-light text-sm'>
					Welcome to Diagram
				</h1>
			</div>
			<button
				className='text-red-500 bg-red-200 px-2 rounded-full
       hover:text-white hover:bg-red-400 transition-colors duration-200'
			>
				SignOut
			</button>
		</div>
	)
}

export default MiniProfile
