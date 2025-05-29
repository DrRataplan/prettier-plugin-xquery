declare function local:timezone ($arg as xs:integer) {
  if ($arg gt 0) then
    xs:dayTimeDuration(concat("PT", $arg, "H"))
  else if ($arg lt 0) then
    xs:dayTimeDuration(concat("-PT", -$arg, "H"))
  else
    xs:dayTimeDuration("PT0H")
};

timezone-from-date(
  adjust-date-to-timezone(fn:current-date(), local:timezone(14))
)
