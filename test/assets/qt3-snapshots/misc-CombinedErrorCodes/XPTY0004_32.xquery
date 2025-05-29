declare namespace foo = "http://www.example.org";

declare function foo:something ($type as xs:integer) {
  if ($type eq 1) then (
    "foo", xs:date("2007-11-28"), "foo"
  ) else
    "foo"
};

let $x as xs:string* := foo:something(1)
return $x
