declare function local:f ($in as xs:anyAtomicType) as xs:boolean {
  $in instance of xs:decimal
};

let $f := function-lookup(xs:QName("local:f"), 1)
return $f(validate type xs:integer { <a>12</a> })
