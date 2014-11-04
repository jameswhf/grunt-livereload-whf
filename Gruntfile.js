module.exports = function(grunt){
    //load Grunt tasks need for reload
    require("matchdep").filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    
    //Generate watching files array
    var fArr = [],
        fileJson = grunt.file.readJSON('files.json');

    function resolveFiles(fs, arr, bases) {
        for (var i = 0, len = fs.length; i < len ; i++) {
            arr.push(bases[fs[i].base] + fs[i].path);
        }
    }
    resolveFiles(fileJson.js, fArr, fileJson.bases);
    resolveFiles(fileJson.css, fArr, fileJson.bases);
    resolveFiles(fileJson.ftl, fArr, fileJson.bases); 

    //configure grunt context
    grunt.initConfig({
        //Grunt express -- start webserver for livereload.js
        express: {
            all: {
                options: {
                    bases: ['Y:\\fakepath'],
                    hostname: '0.0.0.0',
                    //use default port 37592 for livereload.js
                    livereload: true
                }
            }

        },
        watch: {
            all: {
                files: fArr,
                options: {
                    livereload: true
                }
            }
        }
    
    });

    grunt.registerTask('server', [
        'express',
        'watch'
    ]);
};