for $value in
  fn:duplicate-values(
    (
      xs:string("a"),
      xs:string("a"),
      xs:string("b"),
      xs:string("a"),
      xs:string("")
    )
  )
order by string($value)
return $value
