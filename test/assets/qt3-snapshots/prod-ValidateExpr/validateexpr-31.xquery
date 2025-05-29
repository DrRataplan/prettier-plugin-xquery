import schema default element namespace  "http://www.w3.org/XQueryTestOrderBy";

declare function local:numbers ($positive) {
  if ($positive) then
    <PositiveNumbers><orderData>1</orderData></PositiveNumbers>
  else
    <NegativeNumbers><orderData>-1</orderData></NegativeNumbers>
};

let $positive as element(orderData, xs:decimal) :=
  (validate { local:numbers(true()) })/orderData
let $negative as element(orderData, xs:decimal) :=
  (validate { local:numbers(false()) })/orderData
return $positive + $negative
