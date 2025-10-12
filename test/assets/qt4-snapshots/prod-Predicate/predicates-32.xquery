declare variable $i := ("x", 1);

declare variable $j := $i[position() ne 1];

$i[$j]
