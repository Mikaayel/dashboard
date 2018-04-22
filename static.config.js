// import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

export default {
	getSiteData: () => ({
		title: 'React Static',
	}),
	getRoutes: async () => {
		// const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
		return [
			{
				path: '/',
				component: 'src/containers/Home',
			},
			{
				path: '/about',
				component: 'src/containers/About',
			},
			// {
			// 	path: '/blog',
			// 	component: 'src/containers/Blog',
			// 	getData: () => ({
			// 		posts,
			// 	}),
			// 	children: posts.map(post => ({
			// 		path: `/post/${post.id}`,
			// 		component: 'src/containers/Post',
			// 		getData: () => ({
			// 			post,
			// 		}),
			// 	})),
			// },
			{
				is404: true,
				component: 'src/containers/404',
			},
		];
	},
	devServer: {
		port: 8080
	},
	webpack: (config, { defaultLoaders }) => {
		config.node = {
			fs: 'empty',
			navigator: 'empty'
		},
		config.module.rules = [
			{
				oneOf: [
					{
						test: /\.worker\.js$/,
						use: {
							loader: 'worker-loader',
							options: {
								inline: true,
								fallback: false,
								name: 'webWorker-[hash].js'
							}
						}
					},
					{
						test: /\.json$/,
						use: [{ loader: 'json-loader' }],
					},

					defaultLoaders.jsLoader,
					defaultLoaders.cssLoader,
					defaultLoaders.fileLoader,
				],
			},

		];
		return config;
	},
};
