declare function local:gMonthDay ($day as xs:integer) {
  if ($day lt 10) then
    xs:gMonthDay(concat("--12-0", $day))
  else
    xs:gMonthDay(concat("--12-", $day))
};

not(local:gMonthDay(1) ne xs:gMonthDay("--12-31"))
