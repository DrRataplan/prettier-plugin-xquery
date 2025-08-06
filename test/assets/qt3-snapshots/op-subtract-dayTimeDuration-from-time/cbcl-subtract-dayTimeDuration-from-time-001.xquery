declare function local:two-digit ($number as xs:integer) {
  let $string := string($number)
  return if (string-length($string) lt 2) then
    concat("0", $string)
  else
    $string
};

declare function local:time ($hour as xs:integer, $mins as xs:integer) {
  let $h := local:two-digit($hour), $m := local:two-digit($mins)
  return xs:time(concat($h, ":", $m, ":00"))
};

local:time(12, 59) - xs:dayTimeDuration("P0D")
