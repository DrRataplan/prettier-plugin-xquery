fn:unparsed-text(
  "http://www.w3.org/fots/unparsed-text/text-plain-utf-8.txt",
  if (
    fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
  ) then
    "utf-8"
  else
    1
)
