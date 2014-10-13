'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      json: {
        src: ['<%= pkg.env.sources_folder %>/*.json'],
        dest: 'website/data/sources.json',
        options: {
          // Added to the top of the file
          banner: '[',
          // Will be added at the end of the file
          footer: "]",
          separator: ','
        }
      }
    },
    sass: {
      dist: {
        options: {
          banner: [
            "/*",
            "*   ___                      _       _     _                             ",
            "*  / _ \\ _ __   ___ _ __    / \\   __| | __| |_ __ ___  ___ ___  ___  ___ ",
            "* | | | | '_ \\ / _ \\ '_ \\  / _ \\ / _` |/ _` | '__/ _ \\/ __/ __|/ _ \\/ __|",
            "* | |_| | |_) |  __/ | | |/ ___ \\ (_| | (_| | | |  __/\\__ \\__ \\  __/\\__ \\",
            "*  \\___/| .__/ \\___|_| |_/_/   \\_\\__,_|\\__,_|_|  \\___||___/___/\\___||___/",
            "*       |_|                                                              ",
            "*/",
          ].join("\n"),
          style: 'compressed'
        },
        files: {
          'assets/css/style.css': 'assets/sass/style.scss'
        }
      }
    },
    autoprefixer: {
        options: {
          browsers: ['last 2 Chrome versions', 'Firefox >= 28', 'ie 8', 'ie 9']
        },
        dist: {
            files: {
                'website/css/style.css': 'assets/css/style.css',
            }
        }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
       'assets/js/*.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          'website/js/scripts.js': [
            'assets/js/vendor/*.js',
            'assets/js/*.js',
          ]
        }
      },
      options: {
        beautify: false,
        mangle: false
      }
    },
    watch: {
      sass: {
        files: [
          'assets/sass/*.scss',
          'assets/sass/**/*.scss'
        ],
        tasks: ['sass', 'autoprefixer']
      },
      js: {
        files: [
          'assets/js/*.js',
        ],
        tasks: ['jshint', 'uglify']
      },
    }
  });
};
