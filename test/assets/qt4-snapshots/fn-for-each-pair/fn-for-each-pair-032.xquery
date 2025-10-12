fn:for-each-pair(
  "a",
  "b",
  if (
    fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
  ) then
    fn:concat#2
  else (
  )
)
