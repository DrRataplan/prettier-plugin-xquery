let $f := function ($in as xs:anyURI*) as xs:anyURI* {
  $in!resolve-uri(., "http://example.com")
}
return $f(("one.xml", "two.xml"))
