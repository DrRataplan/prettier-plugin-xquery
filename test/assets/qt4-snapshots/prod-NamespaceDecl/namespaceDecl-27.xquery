declare default element namespace "mailto:someuser@someserver.com";

declare namespace N = "mailto:someuser@someserver.com";

let $var := parse-xml(
  '<n:a xmlns:n="mailto:someuser@someserver.com">fred</n:a>'
)
return $var//a is $var//N:a
