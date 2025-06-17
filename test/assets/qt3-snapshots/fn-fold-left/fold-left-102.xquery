declare function local:fold-left (
  $seq as item()*,
  $zero as item()*,
  $f as function (item()*, item()) as item()*
) as item()* {
  if (fn:empty($seq)) then
    $zero
  else
    fn:fold-left(fn:tail($seq), $f($zero, fn:head($seq)), $f)
};

local:fold-left((2, 3, 5, 7), 1, function ($a, $b) { $a * $b })
