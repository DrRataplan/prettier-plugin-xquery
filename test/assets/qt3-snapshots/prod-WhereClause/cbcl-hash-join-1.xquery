for $x in (xs:untypedAtomic("123"), xs:untypedAtomic("234"))
for $y in (xs:string("123"), xs:float(123), xs:double(123))
where $x = $y
return $x
