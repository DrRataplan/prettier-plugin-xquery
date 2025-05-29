let $f :=
  function-lookup(
    QName("http://www.w3.org/2005/xpath-functions", "default-language"),
    0
  )
return $f() eq $f()
