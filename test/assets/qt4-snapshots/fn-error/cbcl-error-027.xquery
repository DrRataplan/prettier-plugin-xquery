empty(
  if (current-date() lt xs:date("2009-01-01")) then (
  ) else
    fn:error()
)
