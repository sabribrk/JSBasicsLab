(function(global) {
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
      // i will be an integer.
     // Return true if it's even, and false if it isn't.
        if (i%2 === 0) {
         return true;
      } else {
        return false;
      }
    };

    JS_BASICS.getFileExtension = function(str) {
        // str will be a string, but it may not have a file extension.
       // Return the file extension (with no period) if it has one, otherwise false
        var strArray = str.split(".");
        if(strArray.length <= 1) {
           return false;
        } else {
        return strArray[strArray.length - 1];
        }
    };

    JS_BASICS.longestString = function(arr) {
       // arr will be an array.
      // Return the longest string in the array
      var longest = "",
      i;
      for(i=0; i<arr.length; i++) {
        if(typeof arr[i] !== "string") {
          continue;
        }
        if(arr[i].length > longest.length) {
          longest = arr[i];
        }
      }
     return longest;
    };

    JS_BASICS.reverseString = function(str) {
         // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
       if(typeof str === 'string'){
       return str.split("").reverse().join("");
     }
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
        var Str = str.replace(/[\W_]/g, '').toLowerCase();
        return Str == Str.split('').reverse().join('');

    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
        var Sum =0;
        if(typeof arr === 'number'){
        Sum += arr;
        } else if(Array.isArray(arr)) {
          for(var i=0; i<arr.length; i++) {
          Sum += JS_BASICS.nestedSum(arr[i]);
        }
    }
      return Sum;

};
    global.JS_BASICS = JS_BASICS;
}(this));
