module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
            'scripts-vendor': 'src/scripts-vendor.js',
            'scripts-app': 'src/scripts-app.js',
            'style-app': 'src/style-app.css'
		},
        concat: {
            'scripts-vendor': {
                files: {
                    'src/scripts-vendor.js': [
                        'src/scripts/vendor/*.js'
                    ]
                }
            },
            'scripts-app': {
                files: {
                    'src/scripts-app.js': [
                        'src/scripts/*.js',
                        'src/scripts/app.js'
                    ]
                }
            }
        },
		uglify: {
            app: {
                options: {
                    mangle: false
                },
                files: {
                    'src/scripts-app.js': ['src/scripts-app.js']
                }
            }
		},
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'src/style-app.css': 'src/styles/app/style.scss'
				}
			}
		},
		watch: {
			'styles-app': {
				files: [
                    'src/styles/app/**/*.scss',
                    'src/styles/app/**/**/*.scss',
                    'src/styles/app/*.scss',
                    'src/styles/app/*.css'
                ],
				tasks: ['clean', 'sass:dev', 'concat']
			},
			'scripts-app': {
				files: 'src/scripts/*.js',
				tasks: ['clean', 'sass:dev', 'concat']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dev', 'Main task for development', function () {
		grunt.task.run(['clean', 'sass:dev', 'concat']);
		grunt.task.run('watch');
	});

    grunt.registerTask('beta', 'Main task for development', function () {
        grunt.task.run(['clean', 'sass:beta', 'concat', 'uglify']);
    });

};
