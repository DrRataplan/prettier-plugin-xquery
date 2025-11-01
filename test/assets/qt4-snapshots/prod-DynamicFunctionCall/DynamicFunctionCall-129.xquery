let $f := function ($in as xs:string*) as xs:string {
  string-join($in!string-length(.), ";")
}
return $f((xs:anyURI("http://one.com/"), xs:anyURI("http://two.com/")))
