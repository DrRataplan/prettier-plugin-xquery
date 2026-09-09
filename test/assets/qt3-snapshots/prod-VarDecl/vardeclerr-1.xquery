declare namespace foo = "http://www..oracle.com/xquery/test";

declare variable $var1 as xs:integer := foo:price(xs:integer(2));

declare function foo:price($b as xs:integer) as xs:integer {
  $var1 + 1
};

$var1
