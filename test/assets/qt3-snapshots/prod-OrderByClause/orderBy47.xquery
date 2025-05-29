declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results> {
  for $x in /DataValues/SmallPositiveNumbers/orderData
  order by xs:double($x) descending
  return xs:double($x)
} </results>
