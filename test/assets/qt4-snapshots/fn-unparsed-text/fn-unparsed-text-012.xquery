(
  fn:unparsed-text(
    "http://www.w3.org/fots/unparsed-text/text-plain-utf-8.txt",
    if (current-date() eq xs:date("1900-01-01")) then
      "utf-8"
    else (
    )
  ),
  fn:unparsed-text(
    "http://www.w3.org/fots/unparsed-text/text-plain-utf-8.txt",
    if (current-date() eq xs:date("1900-01-01")) then (
    ) else
      "utf-8"
  )
)
