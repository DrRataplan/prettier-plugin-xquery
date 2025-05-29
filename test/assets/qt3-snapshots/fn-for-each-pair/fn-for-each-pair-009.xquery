(
  fn:for-each-pair(
    (),
    (),
    if (
      fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
    ) then
      fn:concat#2
    else (
    )
  ),
  fn:for-each-pair(
    (),
    (),
    if (
      fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
    ) then (
    ) else
      fn:concat#2
  )
)
