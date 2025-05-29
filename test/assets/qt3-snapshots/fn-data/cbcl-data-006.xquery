import schema namespace cd =  "http://www.cbcl.co.uk/XQueryTest/complexData";

let $x := validate strict { . }
return string-length($x//cd:extendedComplexTypeWithSimpleUnionContent)
