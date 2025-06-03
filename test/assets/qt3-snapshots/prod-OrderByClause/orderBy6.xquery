declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results>
  {
    for $x in /DataValues/Strings/orderData
    order by concat($x, "another String After") descending
    return concat($x, "another String After")
  }
</results>
