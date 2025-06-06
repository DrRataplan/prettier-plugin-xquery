declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results>
  {
    for $x in /DataValues/NegativeNumbers/orderData
    order by $x ascending
    return $x
  }
</results>
