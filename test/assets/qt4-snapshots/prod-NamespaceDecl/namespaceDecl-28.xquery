declare default element namespace "mailto:someuser@someserver.com";

declare namespace N = "mailto:someuser@someserver.com";

let $var := parse-xml('<a xmlns="mailto:someuser@someserver.com">fred</a>')
return $var//a is $var//N:a
