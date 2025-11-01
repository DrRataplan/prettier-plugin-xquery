let $f := function ($in as xs:anyURI) as xs:string {
  resolve-uri($in, "http://example.com/")
}
return $f(
    xs:NCName(local-name-from-QName(QName("http://saxon.sf.net/", "output")))
  )
