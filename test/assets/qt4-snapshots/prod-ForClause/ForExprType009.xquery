declare namespace xqt = "http://www.w3.org/XQueryTestOrderBy";

for $num as element(xqt:NegativeNumbers) in /xqt:DataValues/xqt:NegativeNumbers
return $num
