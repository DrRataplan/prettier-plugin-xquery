format-number(
  12.34,
  "0.000,00",
  if (current-date() gt xs:date("1900-01-01")) then
    "two"
  else
    "one"
)
