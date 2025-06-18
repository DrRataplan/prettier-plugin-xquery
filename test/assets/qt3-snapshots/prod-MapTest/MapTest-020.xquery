let $f := function ($m as map(xs:integer, xs:integer)) as xs:boolean {
  map:contains($m, 17)
}
return $f(map {17: xs:untypedAtomic("234")})
