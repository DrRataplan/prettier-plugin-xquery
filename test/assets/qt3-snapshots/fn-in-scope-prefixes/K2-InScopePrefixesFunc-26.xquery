let $i :=
  <e>
    { attribute {QName("http://example.com/", "prefix:attributeName")} { () } }
  </e>
return document {
    $i,
    for $ps in in-scope-prefixes($i)
    order by $ps
    return $ps
  }
