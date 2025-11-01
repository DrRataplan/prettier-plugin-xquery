declare default element namespace "mailto:someuser@someserver.com";

let $var := parse-xml(
  '<n:a xmlns:n="mailto:someuser@someserver.com">fred</n:a>'
)
return $var//a
