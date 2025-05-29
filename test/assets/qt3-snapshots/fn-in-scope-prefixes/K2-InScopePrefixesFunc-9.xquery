for $i in
  fn:in-scope-prefixes(
    <e xmlns:p="http://example.com" xmlns:a="http://example.com"> <b/> </e>/b
  )
order by $i
return $i
