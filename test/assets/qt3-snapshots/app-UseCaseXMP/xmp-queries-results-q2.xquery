<results>
  {
    for $b in /bib/book, $t in $b/title, $a in $b/author
    return <result>{ $t }{ $a }</result>
  }
</results>
