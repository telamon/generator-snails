var yeoman = require('yeoman-generator');
var Q = require('q');
var dependencies = {
    base: [
        'express',
        'grunt',
        'grunt-cli',
        'passport',
    ],
    html5: [
        'bower',
        'grunt-bower-task',
        'grunt-contrib-less',
        'grunt-contrib-watch'
    ]
    utils: [
        'request',
        'q',
        'underscore',
        'iconv-lite',
        'grunt-forever',
    ]
    database: [
        'node-migrate',
        'knex',
        'bookshelf',
        'sqlite3'
    ],
    backendTDD: [
        'mocha',
        'chai',
        'nock',
        'supertest'
    ]
};

module.exports = yeoman.generators.NamedBase.extend({
    // Dependency setup actions;
    installingBase:function(){
        Q.ninvoke(this, 'npmInstall', dependencies)
        .done(this.async());
    }
});

