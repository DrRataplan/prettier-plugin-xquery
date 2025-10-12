declare default function namespace "http://www..oracle.com/xquery/test";

declare function price ($i as element()) as element()? {
  $i/price
};

for $j in /bib/book
return price($j)
