<result>
  {
    for $book in $books-doc/*/book
    let $author-list := fn:string-join($book/author, ", ")
    group by $author-list
    order by $author-list
    return <author-list names="{ $author-list }">
        {
          for $b in $book
          order by $b/title
          return <title>{ fn:data($b/title) }</title>
        }
      </author-list>
  }
</result>
