for $value in
  fn:distinct-values(
    (
      xs:date("2008-06-01"),
      xs:date("2008-06-01"),
      xs:date("2012-06-01"),
      xs:date("1918-11-11Z"),
      xs:date("1972-06-01Z"),
      xs:date("1972-06-01Z")
    )
  )
order by $value
return $value
