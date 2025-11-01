deep-equal(
  xs:time("12:00:00+01:00"),
  xs:time("11:00:00Z"),
  map {"timezones": true()}
)
