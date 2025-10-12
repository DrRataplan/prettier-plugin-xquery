fn:innermost(
  if (
    fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
  ) then
    .
  else
    fn:dateTime#2
)
