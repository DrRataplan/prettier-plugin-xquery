declare function local:time ($arg as xs:boolean) {
  if ($arg) then
    xs:time("12:00:00Z")
  else
    fn:current-time()
};

timezone-from-date(
  adjust-date-to-timezone(
    xs:date("2008-08-01"),
    timezone-from-time(local:time(true()))
  )
)
