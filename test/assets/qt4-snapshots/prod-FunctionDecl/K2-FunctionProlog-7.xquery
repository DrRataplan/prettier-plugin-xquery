declare function local:myFunction () as xs:float {
  4.0
};

(
  current-time(),
  1,
  2,
  "a string",
  local:myFunction(),
  4.0,
  xs:double("NaN"),
  current-date()
)[5] instance of xs:float
