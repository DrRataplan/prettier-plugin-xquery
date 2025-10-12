import module namespace test1 = "http://www.w3.org/TestModules/test1";

let $var := fn:concat(xs:string($test1:flag), xs:string(test1:ok()))
return $var
