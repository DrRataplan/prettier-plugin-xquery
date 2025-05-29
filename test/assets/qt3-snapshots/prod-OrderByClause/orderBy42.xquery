declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results> {
  for $x in /DataValues/SmallPositiveNumbers/orderData
  order by ($x + $x) descending
  return $x + $x
} </results>
