declare function local:two-digit ($number as xs:integer) {
  let $string := string($number)
  return if (string-length($string) lt 2) then
    concat("0", $string)
  else
    $string
};

declare function local:date (
  $year as xs:integer,
  $month as xs:integer,
  $day as xs:integer
) {
  let $m := local:two-digit($month), $d := local:two-digit($day)
  return xs:date(concat($year, "-", $m, "-", $d))
};

local:date(-25252734927766554, 05, 12) - xs:yearMonthDuration("-P3214267297Y")
