format-number(
  12.34,
  "0.000,00",
  if (current-date() lt xs:date("1900-01-01")) then (
  ) else
    " Q{http://a.ns/}test"
)
