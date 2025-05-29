string-join(
  (
    for $node in /bib/book/title/text() except /bib/book[3]/title/text()
    return $node/string()
  ),
  "|"
)
