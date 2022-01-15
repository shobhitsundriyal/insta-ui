import React from 'react'
import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline'

function Post({ id, username, userImg, img, caption }) {
	return (
		<div className='my-7 border rounded-xl bg-white'>
			{/**Heading */}
			<div className='flex items-center p-5 rounded-xl'>
				<img
					src={userImg}
					alt=''
					className='h-12 w-12 rounded-full object-contain border p-1 mr-3'
				/>
				<p className=' flex-1 font-bold'>{username}</p>
				<DotsHorizontalIcon className='h-5' />
			</div>
			{/**img */}
			<div className='bg-black min-h-[40vh] items-center flex max-h-[90vh] justify-center'>
				<img src={img} alt='' className='w-full' />
			</div>
			{/**Buttons */}
			<div className='flex justify-between px-4 pt-4'>
				<div className='flex space-x-4 '>
					<HeartIcon className='btn' />
					<ChatIcon className='btn' />
					<PaperAirplaneIcon className='btn rotate-45 -mt-0.5' />
				</div>

				<BookmarkIcon className='btn' />
			</div>
			{/**caption */}
			<p className='p-5 truncate'>
				<span className='font-semibold'>{username + ' '}</span>
				{caption}
			</p>{' '}
			{/**show more */}
			{/**Comments */}
			{/**input box */}
			<div className='flex mx-4 items-center mb-3 space-x-3'>
				<EmojiHappyIcon className='btn' />
				<input
					type='text'
					placeholder='Add a comment...'
					className='flex-1 outline-none focus:ring-0 border-none bg-gray-200 rounded-full'
				/>
				<button className='text-blue-500 font-semibold'>Post</button>
			</div>
		</div>
	)
}

export default Post
