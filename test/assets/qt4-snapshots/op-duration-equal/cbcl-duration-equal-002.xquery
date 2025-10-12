declare function local:duration ($days as xs:integer, $hours as xs:integer) {
  xs:duration(concat("P", $days, "DT", $hours, "H"))
};

not(local:duration(1, 1) ne xs:dayTimeDuration("P0D"))
