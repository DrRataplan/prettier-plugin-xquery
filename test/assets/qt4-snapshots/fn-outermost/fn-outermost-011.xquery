(
  fn:outermost(
    if (current-date() eq xs:date("1900-01-01")) then
      .
    else
      fn:dateTime#2
  ),
  fn:outermost(
    if (current-date() eq xs:date("1900-01-01")) then
      fn:dateTime#2
    else
      .
  )
)
