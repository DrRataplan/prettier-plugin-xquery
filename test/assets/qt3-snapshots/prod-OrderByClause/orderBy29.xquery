declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results> {
    for $x in /DataValues/NegativeNumbers/orderData
    order by ($x * -1) descending
    return ($x * -1e0) (:force to xs:double:)
  } </results>
