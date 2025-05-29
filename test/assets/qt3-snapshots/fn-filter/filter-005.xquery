let $index-of-node :=
  function ($seqParam as node()*, $srchParam as node()) as xs:integer* {
    filter(1 to count($seqParam), function ($this as xs:integer) as xs:boolean {
        $seqParam[$this] is $srchParam
      })
  },
  $nodes := /*/*,
  $perm :=
  (
    $nodes[1],
    $nodes[2],
    $nodes[3],
    $nodes[1],
    $nodes[2],
    $nodes[4],
    $nodes[2],
    $nodes[1]
  )
return $index-of-node($perm, $nodes[2])
