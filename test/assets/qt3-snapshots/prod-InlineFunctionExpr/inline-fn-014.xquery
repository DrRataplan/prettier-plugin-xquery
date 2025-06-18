let $process := function ($op, $x, $y) as function(*) {
  if ($op = "+") then
    function () { $x + $y }
  else
    function () { $x - $y }
}
return $process("+", 3, 4)()
