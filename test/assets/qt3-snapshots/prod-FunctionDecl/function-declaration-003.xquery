declare function local:price ($i as element()) as element()? {
  $i/price
};

for $j in /bib/book
return local:price($j)
