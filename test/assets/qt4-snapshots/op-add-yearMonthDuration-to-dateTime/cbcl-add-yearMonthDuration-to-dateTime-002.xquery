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
  $day as xs:integer,
  $hour as xs:integer,
  $mins as xs:integer
) {
  let $m := local:two-digit($month),
    $d := local:two-digit($day),
    $h := local:two-digit($hour),
    $n := local:two-digit($mins)
  return xs:dateTime(concat($year, "-", $m, "-", $d, "T", $h, ":", $n, ":00"))
};

local:dateTime(2008, 05, 12, 12, 59) + xs:yearMonthDuration("P0Y")
