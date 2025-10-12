for $value in
  fn:distinct-values(
    (xs:gMonthDay("--06-16"), xs:gMonthDay("--06-16"), xs:gMonthDay("--12-15"))
  )
order by string($value)
return $value
