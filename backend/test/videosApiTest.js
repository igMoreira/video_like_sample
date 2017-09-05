process.env.NODE_ENV = "test";

var mongoose = require('mongoose');

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

var server = require('../config/express')();
server.listen();


var Video = server.models.videos;

describe('VideosApi', function () {

    beforeEach(function (done) {
        Video.remove({}, function (err) {
            if (err) throw err;
            done();
        });
    });


    describe('Get all videos', () => {
        it('Should get all videos', function (done) {
            chai.request(server)
                .get('/api/videos')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });


    describe('Get video by id', function () {
        it('Should return a video by its id', function (done) {
            var video = new Video({
                url: "http://my.url.test.com",
                likes: 0
            });


            video.save(function (err, video) {
                chai.request(server)
                    .get('/api/videos/'+video.id)
                    .end(function (err, res) {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('_id').eql(video.id);
                        done();
                    });
            });
        });
    });


    describe('Like a video', function () {
        it('Should increment the number of likes of video', function (done) {
            var video = new Video({
                url: "http://my.url.test.com",
                likes: 0
            });


            video.save(function (err, video) {
                chai.request(server)
                    .post('/api/videos/'+video.id)
                    .end(function (err, res) {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('_id').eql(video.id);
                        res.body.should.have.property('likes').eql(1);
                        done();
                    });
            });
        });
    });


});