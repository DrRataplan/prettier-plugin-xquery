(
  fn:outermost(
    if (current-date() eq xs:date("1900-01-01")) then
      .
    else
      1
  ),
  fn:outermost(
    if (current-date() eq xs:date("1900-01-01")) then
      1
    else
      .
  )
)
