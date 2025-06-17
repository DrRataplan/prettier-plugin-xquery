let $i := <e xmlns="http://example.com/">{ element a { () } }</e>
return (
    count(in-scope-prefixes($i)), count(in-scope-prefixes(exactly-one($i/*)))
  )
