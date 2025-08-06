declare function local:two-digit ($number as xs:integer) {
  let $string := string($number)
  return if (string-length($string) lt 2) then
    concat("0", $string)
  else
    $string
};

declare function local:dateTime (
  $year as xs:integer,
  $month as xs:integer,
  $day as xs:integer
) {
  let $m := local:two-digit($month), $d := local:two-digit($day)
  return xs:dateTime(concat($year, "-", $m, "-", $d, "T12:00:00"))
};

not(local:dateTime(2008, 05, 12) lt xs:dateTime("1972-12-15T12:00:00"))
