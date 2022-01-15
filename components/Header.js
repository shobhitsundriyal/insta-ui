import React from 'react'
import Image from 'next/image'
import {
	SearchIcon,
	MenuAlt1Icon,
	PaperAirplaneIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
	return (
		<div className='shadow-md rounded-b-xl sticky top-0 bg-white z-10'>
			<div className='flex justify-between max-w-6xl lg:mx-auto items-center'>
				{/**Left */}
				<div className='relative w-24 hidden lg:inline-grid cursor-pointer ml-3'>
					<span className='font-satisfy text-3xl my-auto font-semibold'>
						Diagram
					</span>
				</div>

				<div className='relative w-10 flex-shrink-0 lg:hidden cursor-pointer ml-4 mt-1 rotate-[10deg]'>
					{/**<Image
						src='https://links.papareact.com/jjm'
						layout='fill'
						objectFit='contain'
						className='rotate-180'
					/>*/}
					<span className=' font-akromin text-5xl my-auto font-semibold'>
						D
					</span>
				</div>
				{/**Middle */}

				<div className='max-w-sm'>
					<div className='mt-1 relative p-3 rounded-md'>
						<div
							className='absolute pl-3 flex items-center pointer-events-none 
            top-[21px]'
						>
							<SearchIcon className='h-5 text-gray-500' />
						</div>
						<input
							type='text'
							placeholder='Search'
							className='outline-none bg-gray-100 pl-10 w-full block sm:text-sm 
            border-gray focus:ring-black focus:border-black rounded-md'
						/>
					</div>
				</div>

				{/**Right */}
				<div className='flex justify-end space-x-4 items-center mr-3'>
					<HomeIcon className='navBtn' />
					<MenuAlt1Icon className='h-6 md:hidden cursor-pointer' />
					<div className='flex'>
						<PaperAirplaneIcon className='navBtn rotate-45 mb-1 -mr-1' />
					</div>
					<PlusCircleIcon className='navBtn' />
					<UserGroupIcon className='navBtn' />
					<HeartIcon className='navBtn' />
				</div>
			</div>
		</div>
	)
}

export default Header
