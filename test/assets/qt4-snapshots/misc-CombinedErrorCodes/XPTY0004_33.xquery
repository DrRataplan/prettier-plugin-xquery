declare namespace foo = "http://www.example.org";

declare function foo:something ($type as xs:integer) {
  if ($type eq 1) then
    xs:date("2007-11-28")
  else
    "foo"
};

for $x as xs:string in foo:something(1)
return $x
