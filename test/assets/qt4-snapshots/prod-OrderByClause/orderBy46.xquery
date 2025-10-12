declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results>
  {
    for $x in /DataValues/SmallPositiveNumbers/orderData
    order by xs:decimal($x) descending
    return xs:decimal($x)
  }
</results>
