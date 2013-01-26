/**
 * Config options at: http://requirejs.org/docs/api.html#config
 */
require.config({
    shim: {

        'bootstrap-modal': {
            deps: ['jquery']
        },
        'jquery-validate': {
            deps: ['jquery']
        },
    },

    paths: {

        // Plugins
        'text': 'plugins/text',
        'json': 'plugins/json',
        'tpl': 'plugins/tpl',

        // doT
        'dot': 'vendor/doT',
        
        // jQuery
        'jquery': 'vendor/jquery',
        'jquery-validate': 'vendor/jquery.validate',

        // Twitter Bootstrap
        'bootstrap-modal': 'vendor/bootstrap/bootstrap-modal'
    },

    map: {
        
    }
});
