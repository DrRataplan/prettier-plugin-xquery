declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results>
  {
    for $x in /DataValues/NegativeNumbers/orderData
    order by xs:decimal($x) descending
    return xs:decimal($x)
  }
</results>
