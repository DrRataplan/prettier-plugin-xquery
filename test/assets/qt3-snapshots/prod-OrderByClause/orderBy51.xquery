declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results> {
    for $x in /DataValues/SmallNegativeNumbers/orderData
    order by $x descending
    return $x
  } </results>
