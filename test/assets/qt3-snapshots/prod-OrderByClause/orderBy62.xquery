declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

<results>{
  for $x in /DataValues/NegativeNumbers/orderData/xs:decimal(.)
  where $x > -1000
  order by $x ascending collation "http://www.w3.org/2005/xpath-functions/collation/codepoint"
  return $x
}
        </results>
