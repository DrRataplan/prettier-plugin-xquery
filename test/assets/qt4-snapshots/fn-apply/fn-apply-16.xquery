apply(
  if (current-date() lt xs:date("1900-01-01")) then
    abs#1
  else
    round#1,
  [-2]
)
