format-number(
  12.34,
  "0.000,00",
  concat(
    if (current-date() lt xs:date("1900-01-01")) then
      " a"
    else
      " b",
    ":one "
  )
)
