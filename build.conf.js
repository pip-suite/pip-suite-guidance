module.exports = {
    module: {
        name: 'pipGuidance',
        styles: 'index',
        export: 'pip.guidance',
        standalone: 'pip.guidance'
    },
    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: true,
        sass: true,
        lib: true,
        images: true,
        dist: false
    },
    browserify: {
        entries: [
            './src/index.ts',
            './temp/pip-suite-guidance-html.min.js'
        ]
    },
    file: {
        lib: [
            '../node_modules/pip-webui-all/dist/**/*',
            '../pip-suite-rest/dist/**/*',
            '../pip-suite-pictures/dist/**/*',
            // '../pip-suite-documents/dist/**/*',
            // '../pip-suite-composite/dist/**/*',
            '../pip-suite-entry/dist/**/*'
        ]
    },
    samples: {
        port: 8160,
        https: false
    },
    api: {
        port: 8161
    }
};
