module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        clean:{
            test:[
                "test/fixtures/*.js",
                "test/fixtures/*.js.map",
                "test/fixtures/*.d.ts",
                "test/temp/**/*.*",
                "test/temp"
            ]
        },
        typescript:{
            simple:{
                src:["test/fixtures/simple.ts"]
            },
            declaration:{
                src:"test/fixtures/declaration.ts",
                options:{
                    declaration:true
                }
            },
            sourcemap:{
                src:"test/fixtures/sourcemap.ts",
                options:{
                    sourcemap:true
                }
            },
            es5:{
                src:"test/fixtures/es5.ts",
                options:{
                    target:"ES5"
                }
            },
            "no-module":{
                src:"test/fixtures/no-module.ts"
            },
            amd:{
                src:"test/fixtures/amd.ts",
                options:{
                    module:"amd"
                }
            },
            commonjs:{
                src:"test/fixtures/commonjs.ts",
                options:{
                    module:"commonjs"
                }
            },
            single:{
                src:"test/fixtures/single/**/*.ts",
                dest: "test/temp/single.js"
            },
            multi:{
                src:"test/fixtures/multi/**/*.ts",
                dest:"test/temp/multi"
            },
            basePath:{
                src:"test/fixtures/multi/**/*.ts",
                dest:"test/temp/basePath",
                options: {
                    base_path: "test/fixtures/multi"
                }
            }
//            ,
//            err:{
//                src:"test/error.ts"
//            }

        },
        nodeunit:{
            tasks:["test/test.js"]
        }
    });

    grunt.loadTasks("tasks");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.renameTask("test", "nodeunit");
    grunt.registerTask("test", "clean typescript nodeunit");

    grunt.registerTask("default", "test");

};
