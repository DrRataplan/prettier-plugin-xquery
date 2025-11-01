for $value in
  fn:duplicate-values(
    (xs:gYear("2008"), xs:gYear("2008"), xs:gYear("1972"), xs:gYear("2008"))
  )
order by string($value)
return $value
