declare function local:round (
  $x as xs:double,
  $algorithm as (function (xs:double) as xs:double)
) as xs:double {
  $algorithm($x)
};

declare variable $roundToCeiling := local:round(?, upper-case#1);

$roundToCeiling(12.4)
