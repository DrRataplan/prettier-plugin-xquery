declare function local:dayTimeDuration (
  $days as xs:integer,
  $hours as xs:integer
) {
  xs:dayTimeDuration(concat("P", $days, "DT", $hours, "H"))
};

xs:dayTimeDuration("-P5000000000000000000D") -
  local:dayTimeDuration(5000000000000000000, 1)
