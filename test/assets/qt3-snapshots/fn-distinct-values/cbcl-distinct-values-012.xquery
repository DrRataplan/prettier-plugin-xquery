for $value in
  fn:distinct-values((xs:gYear("2008"), xs:gYear("2008"), xs:gYear("1972")))
order by string($value)
return $value
