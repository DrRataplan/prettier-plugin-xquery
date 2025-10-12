let $ns := "http://example.org",
  $keys := (QName($ns, "foo"), QName($ns, "ns:foo"), QName($ns, "ns2:foo"))
return map:merge($keys!map:entry(., position()), map {"duplicates": "use-last"})
