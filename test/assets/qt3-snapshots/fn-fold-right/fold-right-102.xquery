declare function local:fold-right (
  $seq as item()*,
  $zero as item()*,
  $f as function (item(), item()*) as item()*
) as item()* {
  if (fn:empty($seq)) then
    $zero
  else
    $f(fn:head($seq), fn:fold-right(fn:tail($seq), $zero, $f))
};

local:fold-right((2, 3, 5, 7), 1, function ($a, $b) { $a * $b })
