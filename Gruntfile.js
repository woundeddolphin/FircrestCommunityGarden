module.exports = function(grunt){
    grunt.initConfig({
    	clean:{
    		subfolders:['dist/*/']
    	},
    	copy: {
		  	main: {
		    	files: [
		      // includes files within path
		 		    {expand: true, cwd: 'app/iconsets', src: ['**'], dest: 'dist/iconsets'},
		 		    {expand: true, cwd: 'app/bower_components', src: ['**'], dest: 'dist/bower_components'},
		 		    {expand: true, cwd: 'app/img', src: ['**'], dest: 'dist/img'},
		 		    {expand: true, cwd: 'app/partials', src: ['**'], dest: 'dist/partials'}
		    	]
		    }
		},
		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'dist/styling/style.css': ['app/styling/style.css']
		    }
		  }
		},
		watch: {
			js: {
			    files: 'app/scripts/*.js',
			    tasks: ['uglify','copy'],
			    options: {
		      		interrupt: true,
		      	}
		    },
		    css: {
			    files: 'app/styling/*.css',
			    tasks: ['cssmin','copy'],
			    options: {
		      		interrupt: true,
		      	}
		    }
	    },
	    uglify: {
		    my_target: {
		      files: {
		        'dist/scripts/scripts.min.js': ['app/scripts/main.js', 'app/scripts/swiperConfig.js'],
		    	}
			}
 		},
 		ngAnnotate: {
	        options: {
	            singleQuotes: true,
	        },
	        app1: {
	            files: {
	                'app/scripts/main.js': ['app/scripts/main.js'],
	            },
	        },
	    },
    });
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-ng-annotate');



  grunt.registerTask('default', ['clean','copy','uglify','cssmin']);

};
