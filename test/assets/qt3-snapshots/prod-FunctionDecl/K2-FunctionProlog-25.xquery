declare function local:myFunc ($recurse as xs:integer) {
  attribute {concat("name", $recurse)} {
    ()
  },
  if ($recurse = 0) then (
  ) else
    local:myFunc($recurse - 1)
};

<e>{
    local:myFunc((2, current-time())[1] treat as xs:integer)
  }</e>
