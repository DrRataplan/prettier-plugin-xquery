for $value in
  fn:distinct-values(
    (
      xs:dateTime("2008-06-01T12:00:00"),
      xs:dateTime("2008-06-01T12:00:00"),
      xs:dateTime("2008-06-01T00:00:00"),
      xs:dateTime("2008-06-02T00:00:00"),
      xs:dateTime("1918-11-11T11:00:00Z"),
      xs:dateTime("1972-06-01T13:00:00Z"),
      xs:dateTime("1972-06-01T13:00:00Z")
    )
  )
order by $value
return $value
