declare default function namespace "http://www..oracle.com/xquery/test";

declare function price ($b as element()) as element()* {
  $b/price
};

1
