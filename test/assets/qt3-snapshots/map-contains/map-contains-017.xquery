map:contains(
  map {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    xs:duration("P1Y"): "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  },
  xs:yearMonthDuration("P12M")
)
