(1 to 10)
  => for-each(
    if (current-date() lt xs:date("1900-01-01")) then
      fn:identity#1
    else
      fn:void#0
  )
