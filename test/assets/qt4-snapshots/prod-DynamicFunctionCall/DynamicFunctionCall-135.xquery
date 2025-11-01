let $f := function ($in as xs:NCName) as xs:string { string($in) }
return $f(xs:anyURI("para"))
