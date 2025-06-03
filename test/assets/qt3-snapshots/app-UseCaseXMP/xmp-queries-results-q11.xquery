<bib>
  {
    for $b in //book[author]
    return <book>{
          $b/title
        }{
          $b/author
        }</book>
  }
  {
    for $b in //book[editor]
    return <reference>{
          $b/title
        }{
          $b/editor/affiliation
        }</reference>
  }
</bib>
