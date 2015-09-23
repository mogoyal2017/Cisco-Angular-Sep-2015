angular.module('utils')
    .filter("trimText", function(defaultTrimLength){
            return function(value, trimLength){
                trimLength = trimLength || defaultTrimLength;
                return value.length > trimLength
                    ? value.substr(0,trimLength) + '...'
                    : value;
            }
        })
    .filter('toMoment', function(momentApi, $filter){
        var uppercaseFilter = $filter('uppercase');
            return function(value){
                var result =  momentApi(value).fromNow();
                return uppercaseFilter(result);
            };
    });
