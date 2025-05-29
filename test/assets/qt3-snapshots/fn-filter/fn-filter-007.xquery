fn:filter(
  (),
  if (
    fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
  ) then
    fn:exists#1
  else
    1
)
