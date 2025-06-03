for $i in
  fn:in-scope-prefixes(
    <e xmlns:a="http://example.com" xmlns:p="http://example.com"><b /></e>/b
  )
order by $i
return $i
