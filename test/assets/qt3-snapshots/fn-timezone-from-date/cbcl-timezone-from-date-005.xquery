declare function local:date ($arg as xs:boolean) {
  if ($arg) then
    xs:date("1970-01-01Z")
  else
    fn:current-date()
};

timezone-from-date(
  adjust-date-to-timezone(
    xs:date("2008-08-01"),
    timezone-from-date(local:date(true()))
  )
)
