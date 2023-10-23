"use strict";

var a = 23;
var b = 63;
var c = 89;
var lesser = 0;
var greater = 0;

if (a < b && a < c) {
  lesser = a;
} else if (b < a && b < c) {
  lesser = b;
} else {
  lesser = c;
}

if (a > b && a > c) {
  greater = a;
} else if (b > a && b > c) {
  greater = b;
} else {
  greater = c;
}

console.log(lesser, greater);
