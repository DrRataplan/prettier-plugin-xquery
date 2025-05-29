declare namespace foo = "http://www.example.org";

declare function foo:something ($pos as xs:integer) {
  if ($pos eq 1) then
    1
  else
    xs:date("2007-11-29")
};

-foo:something(2)
