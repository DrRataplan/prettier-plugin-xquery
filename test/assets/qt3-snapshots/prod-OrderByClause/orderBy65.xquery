declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results>{
  for $x in /DataValues/NegativeNumbers/orderData/xs:decimal(.)
  order by $x descending collation "http://www.w3.org/2005/xpath-functions/collation/codepoint"
  order by $x ascending collation "http://www.w3.org/2005/xpath-functions/collation/codepoint"
  where $x > -1000
  return $x
}
        </results>
