declare function local:title ($a_book as element()) {
  for $i in $a_book
  return $i/title
};

/bib/book/(local:title(.))
