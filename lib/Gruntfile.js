"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        browserify: {
            js: {
                src: ['../js/main.js'],
                dest: '../dist/main.js'
            },
           options: { 
               browserifyOptions: {
                 paths: ["./node_modules"]
                 }
            }
        },        
        jshint: {
            files: ['Gruntfile.js', '../js/**/*.js'],
            options: {
                predef: ["document", "console"],
                esnext: true,
                strict: "global",
                globals: { 
                    "$":true
                },
                browserify: true,
                debug: true,
                reporter: require('jshint-stylish')
            }
        },

        sass: {
            dist: {
                files: {
                    '../css/main.css': '../scss/main.scss'
                }
            }
        },
        
        watch: {
            javascripts: {
                files: ['../js/**/*.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['../scss/**/*.scss'],
                tasks: ['sass']
            },
            browserify: {
                files: ['../js/**/*.js'],
                tasks: ['browserify']
            }
        }
    }); 
 
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
  
};