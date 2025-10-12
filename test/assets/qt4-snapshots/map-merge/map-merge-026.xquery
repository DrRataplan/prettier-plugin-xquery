map:merge(
  (1 to 100)!map:entry("z", .),
  if (current-date() lt xs:date("1900-01-01")) then
    map {"duplicates": "combine"}
  else (
  )
)?z
