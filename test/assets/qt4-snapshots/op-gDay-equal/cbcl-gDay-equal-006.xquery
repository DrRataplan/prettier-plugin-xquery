declare function local:gDay ($day as xs:integer) {
  if ($day lt 10) then
    xs:gDay(concat("---0", $day))
  else
    xs:gDay(concat("---", $day))
};

not(local:gDay(1) ne xs:gDay("---31"))
