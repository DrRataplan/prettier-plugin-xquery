map:get(
  map {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    number("NaN"): "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  },
  (1 to 5)[10]
)
