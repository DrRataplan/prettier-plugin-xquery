declare function local:dayTimeDuration (
  $days as xs:integer,
  $hours as xs:integer
) {
  xs:dayTimeDuration(concat("P", $days, "DT", $hours, "H"))
};

local:dayTimeDuration(1, 1) + xs:dayTimeDuration("P0D")
