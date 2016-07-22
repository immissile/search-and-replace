var replace = require("replace");
var colors = require('colors');
var _ = require('lodash');

module.exports = function (options, callback) {
    _.assign({
        paths: ['.'],
        target: [],
        exclude: '',
        replacement: ''
    }, options);

    console.log('############## START SEARCH ##############'.inverse.red);

    _.each(_.uniq(options.target), function(key, index){
        var _index = (index+1 < 10 ? '0' + (index+1):index+1).toString();
        console.log('['.magenta, _index.cyan, ']'.magenta, 'start srarch --> '.green, key.yellow.bold);
        replace({
            regex: key,
            replacement: options.replacement,
            paths: options.paths,
            exclude: options.exclude,
            recursive: true,
            silent: true,
        });
    });

    console.log('################### END ##################'.inverse.red);

    if (callback) {
        callback();
    }
};
