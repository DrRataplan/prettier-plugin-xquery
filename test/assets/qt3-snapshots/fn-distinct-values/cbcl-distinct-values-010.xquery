for $value in
  fn:distinct-values(
    (
      xs:untypedAtomic("a"),
      xs:untypedAtomic("a"),
      xs:untypedAtomic("b"),
      xs:untypedAtomic("")
    )
  )
order by string($value)
return $value
