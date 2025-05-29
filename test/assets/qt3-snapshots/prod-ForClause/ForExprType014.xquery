declare namespace xqt = "http://www.w3.org/XQueryTestOrderBy";

for $num as empty-sequence() in
  data(/xqt:DataValues/xqt:NegativeNumbers/xqt:orderData)
return $num
