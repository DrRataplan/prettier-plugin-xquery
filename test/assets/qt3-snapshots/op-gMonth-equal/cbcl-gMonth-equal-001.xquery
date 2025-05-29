declare function local:gMonth ($month as xs:integer) {
  if ($month lt 10) then
    xs:gMonth(concat("--0", $month))
  else
    xs:gMonth(concat("--", $month))
};

not(local:gMonth(1) eq xs:gMonth("--06"))
