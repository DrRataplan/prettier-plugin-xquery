fn:unparsed-text(
  if (
    fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
  ) then
    "http://www.w3.org/fots/unparsed-text/text-plain-utf-8.txt"
  else
    1
)
