import schema namespace cd =  "http://www.cbcl.co.uk/XQueryTest/complexData";

let $x := validate strict { . }
return sum($x//cd:listType)
