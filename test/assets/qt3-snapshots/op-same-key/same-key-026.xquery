declare function local:type ($n) {
  if ($n instance of xs:integer) then
    "integer"
  else if ($n instance of xs:double) then
    "double"
  else if ($n instance of xs:float) then
    "float"
  else
    error()
};

let $values := (
  xs:integer("9223372036854773760"),
  xs:double("9.223372036854774E18"),
  xs:integer("9223372036854773761"),
  xs:integer("9223372036854774784"),
  xs:double("9.223372036854775E18"),
  xs:integer("9223372036854774785"),
  xs:integer("9223372036854775808"),
  xs:double("9.223372036854776E18"),
  xs:float("9.223372E18"),
  xs:integer("9223372036854775809"),
  xs:integer("9223372036854777856"),
  xs:double("9.223372036854778E18")
)
let $m := map:merge(
  for $i in $values
  return map:entry($i, $i),
  map {"duplicates": "use-last"}
)
let $contents := string-join(
  for $v in $values
  return ($p || " $m(" || local:type($v) || ") == " || local:type($m($v))),
  ", "
)
return ("Size: " || map:size($m) || ", " || $contents)
