(
  fn:unparsed-text-available(
    if (current-date() eq xs:date("1900-01-01")) then
      "http://www.w3.org/fots/unparsed-text/text-plain-utf-8.txt"
    else
      1
  ),
  fn:unparsed-text-available(
    if (current-date() eq xs:date("1900-01-01")) then
      1
    else
      "http://www.w3.org/fots/unparsed-text/text-plain-utf-8.txt"
  )
)
