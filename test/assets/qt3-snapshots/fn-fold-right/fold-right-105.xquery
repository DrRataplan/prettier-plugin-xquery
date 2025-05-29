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

let $f := function ($a, $b) {
    ($b, $a)
  }
return local:fold-right(1 to 5, (), $f)
