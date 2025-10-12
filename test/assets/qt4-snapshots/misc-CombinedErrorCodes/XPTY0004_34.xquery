declare namespace foo = "http://www.example.org";

declare function foo:something ($type) as xs:integer {
  $type
};

foo:something("foo")
