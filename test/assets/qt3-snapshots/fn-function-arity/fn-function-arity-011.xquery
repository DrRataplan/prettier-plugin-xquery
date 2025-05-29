(
  fn:function-arity(
    if (current-date() eq xs:date("1900-01-01")) then
      fn:dateTime#2
    else
      1
  ),
  fn:function-arity(
    if (current-date() eq xs:date("1900-01-01")) then
      1
    else
      fn:dateTime#2
  )
)
