for $x in (xs:untypedAtomic("2.0"), xs:untypedAtomic("3"), xs:double("3.0"))
for $y in (xs:untypedAtomic("2"), xs:untypedAtomic("3"), xs:double("3"))
where $x = $y
return $x
