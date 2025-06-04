declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results> {
    for $x in /DataValues/Strings/orderData
    order by concat(
        $x,
        "()"
      ) ascending collation "http://www.w3.org/2005/xpath-functions/collation/codepoint"
    return concat($x, "()")
  } 
        </results>
