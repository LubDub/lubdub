var assert      = require('assert');
var superagent  = require('superagent');
var status      = require('http-status');
var chai        = require('chai');
var cheerio     = require('cheerio');
var app         = require('../index.js');
var siteUrl     = 'http://127.0.0.1:3001/'

describe('Framework', function() {
    before(function() {});
    after(function() {});

    it('RUNNING', function(done) {
        superagent.get(siteUrl).end(function(err, res) {
            $ = cheerio.load(res.text);
            assert.equal(res.status, 200);
            assert.deepEqual('Lub Dub', $('h1').text());
            done();
        });
    });  
     
});