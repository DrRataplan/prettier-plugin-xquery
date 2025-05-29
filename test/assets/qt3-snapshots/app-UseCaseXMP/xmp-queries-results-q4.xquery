<results> {
    let $a := //author
    for $last in distinct-values($a/last),
      $first in distinct-values($a[last = $last]/first)
    order by $last , $first
    return <result> 
      				<author> <last>{
            $last
          }</last> <first>{
            $first
          }</first> </author> 
      				{
          for $b in /bib/book
          where some
            $ba in
            $b/author satisfies
            ($ba/last = $last and $ba/first = $first)
          return $b/title
        } 
      			   </result>
  } 
      	</results>
