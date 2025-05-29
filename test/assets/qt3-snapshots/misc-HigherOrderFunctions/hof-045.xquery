declare function local:round (
  $x as xs:double,
  $algorithm as (function (xs:double) as xs:double)
) as xs:double {
  $algorithm($x)
};

declare variable $roundToCeiling := local:round(?, ceiling#1);

$roundToCeiling(12.4)
