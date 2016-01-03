'use strict';

var emailAppServices = angular.module('emailAppServices', ['ngResource']);

emailAppServices.factory('Count', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8080/emails/list/count', {});
    }]);

emailAppServices.factory('Emails', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8080/emails/list/:message_id/:action', {
            message_id: '@messasge_id',
            action: '@action'
        });
    }]);

console.log("In services");