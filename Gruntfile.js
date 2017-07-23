module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					compress: false,
					yuicompress: true,
					optimization: 2
				},
				files: {
					// target.css file : source.less file
					"public/css/custom/custom-style.css": "public/less/custom-style.less"
				}
			}
		},
		watch: {
			styles: {
				files: ['public/less/**/*.less','desktop/less/**/*.less'],
				tasks: ['less'],
				options: {
					spawn: false
				}	
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};