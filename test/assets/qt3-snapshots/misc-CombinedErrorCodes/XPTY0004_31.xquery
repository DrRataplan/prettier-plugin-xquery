declare namespace foo = "http://www.example.org";

declare function foo:something ($type as xs:integer) {
  if ($type eq 1) then
    xs:date("2007-11-28")
  else
    "foo"
};

<e>{ attribute {foo:something(1)} {} }</e>
