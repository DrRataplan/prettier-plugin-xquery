declare variable $strings := ("1", "2");

declare variable $untypeds := (<untyped>1</untyped>, <untyped>2</untyped>);

for $string in $strings
for $untyped in $untypeds
where $untyped = $string
return $string
