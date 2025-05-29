declare function local:dateTime ($arg as xs:boolean) {
  if ($arg) then
    xs:dateTime("1970-01-01T00:00:00Z")
  else
    fn:current-dateTime()
};

timezone-from-date(
  adjust-date-to-timezone(
    xs:date("2008-08-01"),
    timezone-from-dateTime(local:dateTime(true()))
  )
)
