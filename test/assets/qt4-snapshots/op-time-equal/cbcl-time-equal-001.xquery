declare function local:two-digit ($number as xs:integer) {
  let $string := string($number)
  return if (string-length($string) lt 2) then
      concat("0", $string)
    else
      $string
};

declare function local:time (
  $hours as xs:integer,
  $mins as xs:integer,
  $seconds as xs:decimal
) {
  let $h := local:two-digit($hours), $m := local:two-digit($mins)
  return xs:time(concat($h, ":", $m, ":", $seconds))
};

not(local:time(12, 59, 30) eq xs:time("12:32:05"))
