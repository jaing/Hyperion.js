({
	baseUrl: '.',
	dir: 'build',
	name: 'main',
	findNestedDependencies: true,
	wrap: true,
	paths: {
		jquery: 'vendor/jquery-2.1.1',
		underscore: 'vendor/underscore',
		backbone: 'vendor/backbone',
		text: 'vendor/text',
		bootstrap: 'vendor/bootstrap'
	},
	shim: {
		'backbone': {
			'deps': ['underscore', 'jquery','text','bootstrap']
		}
	},
	include: [
        'views/Global/header',
        'views/Global/error',
        'views/Examples/jsonView',
        'views/Examples/simpleView',
        'views/Examples/main',
        'views/Examples/toJson',
        'views/Page/about',
        'views/Page/main'
    ]
})