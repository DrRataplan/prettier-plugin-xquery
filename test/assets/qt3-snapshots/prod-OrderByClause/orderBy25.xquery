declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results>
  {
    for $x in /DataValues/NegativeNumbers/orderData
    order by xs:float($x) descending
    return xs:float($x)
  }
</results>
