import React from 'react'
import Post from './Post'

const posts = [
	{
		id: 1,
		userImg:
			'https://yt3.ggpht.com/yti/APfAmoEQi63JxywnIUwqtgy7xVB2ytIbi3ErPxBeh2Tg=s88-c-k-c0x00ffffff-no-rj-mo',
		username: 'shobhitsundriyal1',
		img: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23-1024x683.jpg',
		caption: 'This is amazinn..',
	},
	{
		id: 2,
		userImg:
			'https://yt3.ggpht.com/yti/APfAmoEQi63JxywnIUwqtgy7xVB2ytIbi3ErPxBeh2Tg=s88-c-k-c0x00ffffff-no-rj-mo',
		username: 'shobhitsundriyal1',
		img: 'https://image.shutterstock.com/image-vector/large-number-mountains-vast-landscapes-260nw-1389573218.jpg',
		caption: 'This is amazinn..',
	},
]

function Posts() {
	return (
		<div className=''>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	)
}

export default Posts
