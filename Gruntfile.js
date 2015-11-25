module.exports = function(grunt) {

  grunt.initConfig({
    ngconstant: {
      // Options for all targets
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'config',
      },
      // Environment targets
      development: {
        options: {
          dest: 'app/config.js'
        },
        constants: {
          ENV: {
            name: 'development',
            apiEndpoint: 'http://localhost:9000/'
          }
        }
      },
      production: {
        options: {
          dest: 'app/config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            apiEndpoint: 'https://readable-api.herokuapp.com/'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-ng-constant');

  // A very basic default task.
  grunt.registerTask('default', ['ngconstant:production']);

  grunt.registerTask('config-local', ['ngconstant:development']);

};
