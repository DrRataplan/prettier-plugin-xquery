import schema namespace cd =  "http://www.cbcl.co.uk/XQueryTest/complexData";

let $x := validate strict { . }
return count(data($x//cd:unionWithList))
