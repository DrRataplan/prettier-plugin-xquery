import schema namespace cd =  "http://www.cbcl.co.uk/XQueryTest/complexData";

let $x := validate strict { . }
return data($x//cd:unionType) instance of xs:string
