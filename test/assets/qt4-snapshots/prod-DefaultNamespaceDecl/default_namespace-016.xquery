declare default function namespace "http://example.org";

declare function title ($a_book as element()) as element()* {
  for $i in $a_book
  return $i/title
};

/bib/book/(title(.))
