import module namespace copy = "http://www.w3.org/QT3/copy";

let $var := copy:copy(/*)
return fn:id("argument1", $var)
