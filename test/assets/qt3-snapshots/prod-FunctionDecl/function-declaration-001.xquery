declare namespace foo = "http://www..oracle.com/xquery/test";

declare function foo:price ($b as element()) as element()* {
  $b/price
};

1
