fn:outermost(
  if (
    fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
  ) then
    .
  else
    1
)
