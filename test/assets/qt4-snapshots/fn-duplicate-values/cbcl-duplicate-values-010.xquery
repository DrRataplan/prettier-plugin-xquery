for $value in
  fn:duplicate-values(
    (
      xs:untypedAtomic("a"),
      xs:untypedAtomic("a"),
      xs:untypedAtomic("b"),
      xs:untypedAtomic("")
    )
  )
order by string($value)
return $value
