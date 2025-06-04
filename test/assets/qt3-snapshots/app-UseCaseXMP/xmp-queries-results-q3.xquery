<results> {
    for $b in /bib/book
    return <result> {
          $b/title
        } {
          $b/author
        } </result>
  } 
      	</results>
