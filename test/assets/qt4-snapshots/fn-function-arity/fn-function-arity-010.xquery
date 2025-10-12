fn:function-arity(
  if (
    fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
  ) then
    fn:dateTime#2
  else
    1
)
