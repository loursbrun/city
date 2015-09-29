module.exports = function (grunt) {

    grunt.addSlashes = function (string) {
        return string.replace(/\\/g, '\\\\').
            replace(/\u0008/g, '\\b').
            replace(/\t/g, '').
            replace(/\n/g, '').
            replace(/\f/g, '').
            replace(/\r/g, '').
            replace(/'/g, '\\\'').
            replace(/"/g, '\\"');
    }

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        auto_install: {
            options: {
                cwd: '',
                stdout: true,
                stderr: true,
                failOnError: true
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            app: {
                src: [
                    'dev/cside/web/front/app/app.js',
                    'dev/cside/web/front/app/modules/**/*.js',
                    'dev/cside/web/front/app/utils/**/*.js',
                    'dev/cside/web/front/app/controllers/**/*.js',
                    'dev/cside/web/front/app/directives/**/*.js',
                    'dev/cside/web/front/app/services/**/*.js',
                    'dev/cside/web/front/html/app.templates.js',
                    'dev/cside/web/front/app/app-config.js'
                ],
                dest: 'deploy/deploy/scripts/app/app.js'
            },
            apprequire: {
                src: [
                    'deploy/deploy/scripts/app/app.js',
                    'dev/cside/web/front/app/deploy/app.js'
                ],
                dest: 'deploy/deploy/scripts/app/app.js'
            },
            vendors: {
                src: [
                    "dev/cside/web/front/libs/bower/bbs-core-modules/ConsoleUtils.js",
                    "dev/cside/web/front/libs/bower/greensock/src/minified/TweenMax.min.js",
                    "dev/cside/web/front/libs/bower/greensock/src/minified/plugins/ScrollToPlugin.min.js",
                    "dev/cside/web/front/libs/bower/angular/angular.min.js",
                    "dev/cside/web/front/libs/bower/bbs-core-modules/GlobalEvents.js",
                    "dev/cside/web/front/libs/bower/angular-touch/angular-touch.min.js",
                    "dev/cside/web/front/libs/bower/angular-ui-router/release/angular-ui-router.min.js",
                    "dev/cside/web/front/libs/bower/angular-animate/angular-animate.min.js",
                    "dev/cside/web/front/libs/bower/bbs-lv-modules/FreeCasterUtils.js",
                    "dev/cside/web/front/libs/bower/bbs-lv-modules/VuittonServices.js",
                    "dev/cside/web/front/libs/bower/bbs-lv-modules/TrackerUtils.js",
                    "dev/cside/web/front/libs/bower/bbs-lv-modules/WrapperUtils.js",
                    "dev/cside/web/front/libs/bower/hamsterjs/hamster.js",
                    "dev/cside/wen/front/libs/bower/bbs-core-modules/GlobalEvents.js",
                    "dev/cside/web/front/libs/bower/mobile-detect/mobile-detect.min.js",
                    "dev/cside/web/front/libs/bower/bbs-core-modules/DeviceDetector.js",
                    "dev/cside/web/front/libs/bower/bbs-core-modules/ImageAlphaDecoder.js"
                ],
                dest: 'deploy/deploy/scripts/app/vendors.js'
            },
            vendors_wrap: {
                src: [
                    "dev/cside/web/front/app/deploy/preWrap.js",
                    'deploy/deploy/scripts/app/vendors.js',
                    "dev/cside/web/front/app/deploy/postWrap.js"
                ],
                dest: 'deploy/deploy/scripts/app/vendors.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            main: {
                files: {
                    'deploy/deploy/scripts/main.js': ['deploy/deploy/scripts/main.js'],
                    'deploy/deploy/scripts/vendors/require.js': ['deploy/deploy/scripts/vendors/require.js']
                }
            },
            app: {
                files: {
                    'deploy/deploy/scripts/app/app.js': ['deploy/deploy/scripts/app/app.js']
                }
            },
            vendors: {
                files: {
                    'deploy/deploy/scripts/app/vendors.js': ['deploy/deploy/scripts/app/vendors.js']
                }
            }
        },
        replace: {
            append: {
                src: ['deploy/deploy/scripts/app/app.js'],
                overwrite: true,
                replacements: [
                    {
                        from: '#APPEND#',
                        to: '<%= grunt.addSlashes(grunt.file.read("dev/cside/web/front/app/deploy/append.html")) %>'
                    }
                ]
            },
            readme: {
                src: ['dev/cside/web/front/app/deploy/readme.txt'],
                dest: 'deploy/readme.txt',
                replacements: [
                    {
                        from: '#package_name#',
                        to: '<%= pkg.package_name %>'
                    },
                    {
                        from: '#project_path#',
                        to: '<%= pkg.project_path %>'
                    },
                    {
                        from: '#taglib_path#',
                        to: '<%= pkg.taglib_path %>'
                    },
                    {
                        from: '#url#',
                        to: '<%= pkg.url %>'
                    }
                ]
            },
            sourcemapping: {
                src: ['deploy/deploy/scripts/app/app.js', 'deploy/deploy/scripts/app/vendors.js'],
                overwrite: true,
                replacements: [
                    {
                        from: /\/\/# sourceMappingURL=(.*?)\.min\.js\.map/gi,
                        to: ''
                    }
                ]
            },
            bootstrap: {
                src: ['deploy/index.php',
                    'deploy/readme.txt',
                    'dev/cside/web/front/index.php',
                    'dev/cside/web/front/app/app.js',
                    'dev/cside/web/front/app/deploy/append.html',
                    'dev/cside/web/front/data/global.json',
                    'Gruntfile.js'
                ],
                overwrite: true,
                replacements: [{
                    from: 'Bootstrap',
                    to: '<%= pkg.name %>'
                }]
            }
        },
        copyto: {
            cside: {
                files: [
                    {cwd: 'dev/cside/web/front/assets/', src: ['**/*'], dest: 'deploy/deploy/assets/'},
                    {cwd: 'dev/cside/web/front/data/', src: ['**/*'], dest: 'deploy/deploy/data/'},
                    {cwd: 'dev/cside/web/front/i18n/', src: ['**/*', '!**/scss/**'], dest: 'deploy/deploy/i18n/'},
                    {cwd: 'dev/cside/web/front/app/deploy/', src: ['main.js'], dest: 'deploy/deploy/scripts/'},
                    {
                        cwd: 'dev/cside/web/front/libs/bower/requirejs/',
                        src: ['require.js'],
                        dest: 'deploy/deploy/scripts/vendors/'
                    },
                    {cwd: 'dev/cside/web/front/', src: ['taglib.js'], dest: 'deploy/'}
                ]
            },
            styles: {
                files: [
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/deu_DE/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/eng_AU/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/eng_CA/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/eng_GB/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/eng_HK/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/eng_US/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/esp_ES/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/fra_CA/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/fra_FR/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/ita_IT/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/jpn_JP/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/kor_KR/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/por_BR/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/rus_RU/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/zhs_CN/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/zht_HK/styles/'
                    },
                    {
                        cwd: 'dev/cside/web/front/i18n/eng_E1/styles/',
                        src: ['**/*'],
                        dest: 'dev/cside/web/front/i18n/zht_TW/styles/'
                    }
                ]
            }
        },
        rename: {
            main: {
                files: [
                    {
                        src: ['deploy/deploy/i18n/eng_E1/data/localized.json'],
                        dest: 'deploy/deploy/i18n/eng_E1/data/localized.clean.json'
                    }
                ]
            }
        },
        ngtemplates: {
            Bootstrap: {
                cwd: 'dev/cside/web/front/',
                src: 'html/**/**.html',
                dest: 'dev/cside/web/front/html/app.templates.js',
                options: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: false,
                        removeComments: false, // Only if you don't use comment directives!
                        removeEmptyAttributes: false,
                        removeRedundantAttributes: false,
                        removeScriptTypeAttributes: false,
                        removeStyleLinkTypeAttributes: false
                    }
                }
            }
        },
        shell: {
            getLocales: {
                command: 'cd deploy/; php locales.php;'
            }
        },
        clean: {
            deploy: {
                src: ["./deploy/deploy/"]
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'deploy/deploy/i18n',
                    src: ['**/*.css'],
                    dest: 'deploy/deploy/i18n',
                    ext: '.css'
                }]
            }
        },
        usebanner: {
            js: {
                options: {
                    position: 'top',
                    banner: 'var BBSVERSION = "<%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %>";',
                    linebreak: true
                },
                files: {
                    src: ['deploy/deploy/scripts/main.js']
                }
            }
        }
    });

    grunt.registerTask('bootstrap', [
        'replace:bootstrap'
    ]);

    grunt.registerTask('deploy', [
        'clean',
        'ngtemplates',
        'copyto:cside',
        'concat:app',
        'concat:apprequire',
        'concat:vendors',
        'concat:vendors_wrap',
        'replace:append',
        'replace:readme',
        'replace:sourcemapping',
        'uglify',
        //'cssmin',
        "usebanner"
    ]);

    grunt.registerTask('dev', [
        'clean',
        'ngtemplates',
        'copyto:cside',
        'concat:app',
        'concat:apprequire',
        'concat:vendors',
        'concat:vendors_wrap',
        'replace:append',
        'replace:readme',
        'replace:sourcemapping'
    ]);

    grunt.registerTask('getLocales', [
        'shell:getLocales'
    ]);

    grunt.registerTask('copyStyles', [
        'copyto:styles'
    ]);

};