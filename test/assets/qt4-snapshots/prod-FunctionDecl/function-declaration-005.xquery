declare function local:mysum ($i as xs:integer, $j as xs:integer) {
  let $j := $i + $j
  return $j
};

declare function local:invoke_mysum () {
  let $s := 1
  for $d in (1, 2, 3, 4, 5)
  let $s := local:mysum($s, $d)
  return $s
};

local:invoke_mysum()
