declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

/DataValues/(
  (
    for $x in NegativeNumbers/*
    order by (
        if (name(.) = "orderData") then
          $x
        else
          -$x
      )
    return $x
  )[1]
)
