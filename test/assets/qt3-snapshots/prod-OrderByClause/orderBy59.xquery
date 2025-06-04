declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results> {
    for $x in /DataValues/SmallNegativeNumbers/orderData
    order by string($x) ascending
    return string($x)
  } </results>
