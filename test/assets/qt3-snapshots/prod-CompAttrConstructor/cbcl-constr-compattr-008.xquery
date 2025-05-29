declare function local:factorial ($arg as xs:integer) as xs:integer {
  if ($arg le 1) then
    1
  else
    $arg * local:factorial($arg - 1)
};

<element> {
  attribute {fn:QName("http://www.example.com/", "sgml:foo")} {
    local:factorial(5)
  }
} </element>
