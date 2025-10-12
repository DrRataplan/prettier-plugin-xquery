declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results>
  {
    for $x in /DataValues/PositiveNumbers/orderData
    order by xs:integer($x) descending
    return xs:integer($x)
  }
</results>
