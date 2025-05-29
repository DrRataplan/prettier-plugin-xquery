declare variable $x := <b/>;

declare variable $y := <a/>;

($x union $y) union $x,
($x intersect $y) union $x,
($x except $y) union $x,
($y except $x) union $x,
$x union ($x union $y),
$x union ($x intersect $y),
$x union ($x except $y),
$x union ($y except $x)
