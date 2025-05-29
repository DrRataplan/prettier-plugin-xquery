declare namespace array = "http://www.w3.org/2005/xpath-functions/array";
declare namespace serialization = "http://www.w3.org/2010/xslt-xquery-serialization";

(:declare option serialization:method "adaptive";:)

declare function local:fact ($n as xs:integer) {
  if ($n eq 1) then
    1
  else
    $n * local:fact($n - 1)
};

declare function local:permute ($seq as item()*) as array(item()*) {
  local:permute($seq, local:fact(count($seq)), random-number-generator())
};

declare function local:permute (
  $seq as item()*,
  $n as xs:integer,
  $rng as map(*)
) as array(item()*) {
  if ($n eq 0) then
    []
  else
    array:append(local:permute($seq, $n - 1, $rng?next()), $rng?permute($seq))
};

let $s := ("A", "B", "C")
return array:sort(local:permute($s), (), function ($s) {
      $s!.
    }) => array:for-each(string-join#1)
