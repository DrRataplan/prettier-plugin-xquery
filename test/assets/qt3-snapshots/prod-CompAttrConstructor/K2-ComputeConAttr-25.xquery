declare function local:myFunc ($recurse as xs:integer) {
  attribute {concat("name", $recurse)} {
    "content"
  },
  if ($recurse = 0) then (
  ) else
    local:myFunc($recurse - 1)
};

<b>{
    local:myFunc(2)
  }{
    attribute name {
      "content"
    }
  }</b>
