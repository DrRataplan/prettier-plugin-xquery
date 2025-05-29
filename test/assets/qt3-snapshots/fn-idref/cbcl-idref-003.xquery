declare function local:generate ($arg as xs:integer?) as xs:string* {
  if ($arg = 0) then (
  ) else
    "id1",
  "id2"
};

let $doc := document {
    <root />
  }
return fn:empty($doc/fn:idref(local:generate(0)))
