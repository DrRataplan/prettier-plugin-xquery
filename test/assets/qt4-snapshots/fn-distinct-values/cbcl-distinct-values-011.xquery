for $value in
  fn:distinct-values(
    (xs:string("a"), xs:string("a"), xs:string("b"), xs:string(""))
  )
order by string($value)
return $value
