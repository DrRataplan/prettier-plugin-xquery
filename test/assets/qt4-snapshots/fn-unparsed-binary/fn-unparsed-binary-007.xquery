fn:unparsed-binary(
  if (
    fn:current-dateTime() ne fn:dateTime(fn:current-date(), fn:current-time())
  ) then
    "http://www.w3.org/fots/unparsed-text/text-plain-utf-8.txt"
  else
    1
)
