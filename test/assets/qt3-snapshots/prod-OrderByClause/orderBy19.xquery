declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results> {
  for $x in /DataValues/Strings/orderData
  order by string-length($x) ascending
  return string-length($x)
} </results>
