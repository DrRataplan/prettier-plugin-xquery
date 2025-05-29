for $value in
  fn:distinct-values(
    (xs:time("12:00:00"), xs:time("11:00:00"), xs:time("12:00:00"))
  )
order by $value
return $value
