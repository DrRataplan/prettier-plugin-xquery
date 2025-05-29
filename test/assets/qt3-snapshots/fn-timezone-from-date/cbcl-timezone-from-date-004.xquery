declare function local:timezone ($arg as xs:integer) {
  if ($arg gt 0) then
    xs:dayTimeDuration(concat("PT", $arg, "H"))
  else if ($arg lt 0) then
    xs:dayTimeDuration(concat("-PT", -$arg, "H"))
  else
    xs:dayTimeDuration("PT0H")
};

timezone-from-date(
  adjust-date-to-timezone(
    fn:current-date(),
    timezone-from-date(
      adjust-date-to-timezone(xs:date("1970-01-01"), local:timezone(-12))
    )
  )
)
