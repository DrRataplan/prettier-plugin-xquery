import schema default element namespace  "http://www.w3.org/XQueryTest/abf" at  "qischema008.xsd";

let $a := <a>{ validate strict { <abf><a /><b /><f /></abf> } }</a>
return $a/*
