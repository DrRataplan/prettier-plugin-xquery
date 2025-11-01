let $f := function ($in as xs:base64Binary*) as xs:string {
  string-join($in!lower-case(string(.)), ";")
}
return $f((xs:base64Binary("ABCD"), xs:hexBinary("01020304")))
