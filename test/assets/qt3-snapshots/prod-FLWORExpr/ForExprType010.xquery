import schema namespace xqt =  "http://www.w3.org/XQueryTestOrderBy";

for $num as xs:decimal in
  data(/xqt:DataValues/xqt:NegativeNumbers/xqt:orderData)
return $num
