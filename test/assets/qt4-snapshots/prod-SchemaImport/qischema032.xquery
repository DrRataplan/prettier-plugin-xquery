import schema namespace q =  "http://schema.highwire.org/Publishing/Fragment";

let $e := ./*
return validate { element {node-name($e)} { $e/@*, $e/* } }
