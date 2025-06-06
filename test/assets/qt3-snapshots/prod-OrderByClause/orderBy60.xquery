declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

declare base-uri "http://www.w3.org/2005/xpath-functions/";

<results>
  {
    for $x in /DataValues/Strings/orderData
    order by concat($x, "()") ascending collation "collation/codepoint"
    return concat($x, "()")
  }
</results>
