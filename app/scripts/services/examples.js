'use strict';

angular.module('yeomanProjApp')
    .factory('examples', [
        '$http', '$q', function($http, $q) {

            var getData = function(callback) {
                $http({
                    method: 'GET',
                    url: 'examples/examples.json',
                    cache: true
                }).success(callback);
            };

            return {
                list: getData,
                find: function(exampleNumber, callback) {
                    getData(function (data) {
                        var i;
                        for (i = 0; i < data.length; i++) {
                            var item = data[i];
                            if (item.id === exampleNumber) {
                                callback(item);
                                return;
                            }
                        }
                    });
                },
                getFiles: function(example, callback) {
                    var files = example.files;
                    if (files) {
                        var path = example.path;
                        var html = files.html;
                        var js = files.js;

                        var promises = [];
                        var deferred;

                        if (html) {
                            deferred = $q.defer();

                            $http({
                                    method: 'GET',
                                    url: path + '/' + html,
                                    cache: true
                                }).success(function(data) {
                                    deferred.resolve(data);
                                }).
                                error(function(error) {
                                    deferred.reject();
                                });

                            promises.push(deferred.promise);
                        }

                        if (js) {
                            deferred = $q.defer();

                            $http({
                                    method: 'GET',
                                    url: path + '/' + js,
                                    cache: true
                                }).success(function(data) {
                                    deferred.resolve(data);
                                }).
                                error(function(error) {
                                    deferred.reject();
                                });

                            promises.push(deferred.promise);
                        }

                        $q.all(promises).then(function (data) {
                            var ret = {
                                html: data[0],
                                js: data[1]
                            };

                            callback(ret);
                        });
                    }
                }
            };
        }
    ]);