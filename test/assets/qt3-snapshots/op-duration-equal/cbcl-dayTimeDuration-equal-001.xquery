declare function local:dayTimeDuration (
  $days as xs:integer,
  $hours as xs:integer
) {
  xs:dayTimeDuration(concat("P", $days, "DT", $hours, "H"))
};

not(local:dayTimeDuration(1, 1) eq xs:dayTimeDuration("P0D"))
