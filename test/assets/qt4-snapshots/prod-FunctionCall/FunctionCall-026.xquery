function ($in as xs:string*) as xs:string { string-join($in, ";") }(
  (xs:anyURI("http://one.com/"), xs:anyURI("http://two.com/"))
)
