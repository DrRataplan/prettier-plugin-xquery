let $f as function (xs:anyAtomicType) as xs:NMTOKEN* := xs:NMTOKENS#1
let $v as xs:NMTOKEN* := $f("a b c")
return count($v)
