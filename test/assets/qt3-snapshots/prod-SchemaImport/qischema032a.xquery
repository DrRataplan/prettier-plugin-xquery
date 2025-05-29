import schema namespace q =  "http://schema.highwire.org/Publishing/Fragment" at  "qischema032.xsd";

let $e := ./*
return validate { document {
      element {node-name($e)} {
        $e/@*, $e/*
      }
    } }
