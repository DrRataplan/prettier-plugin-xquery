deep-equal(
  xs:time("12:00:00+01:00"),
  adjust-time-to-timezone(xs:time("12:00:00+01:00"), ()),
  map {"timezones": true()}
)
