declare namespace strings = "http://datypic.com/strings";

let $library := load-xquery-module("http://datypic.com/strings")
let $trimFunction := $library?functions?(xs:QName("strings:trim"))?1
return $trimFunction("   x   y   ")
