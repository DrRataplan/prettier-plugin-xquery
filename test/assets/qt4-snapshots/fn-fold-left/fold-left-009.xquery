declare function local:distinct-nodes-stable ($seq as node()*) {
  fold-left(
    $seq,
    (),
    function ($foundSoFar as node()*, $this as node()) as node()* {
      if ($foundSoFar intersect $this) then
        $foundSoFar
      else (
        $foundSoFar, $this
      )
    }
  )
};

let $nodes := (<a />, <b />, <c />, <d />, <e />, <f />)
let $perm := (
  $nodes[1],
  $nodes[2],
  $nodes[4],
  $nodes[1],
  $nodes[2],
  $nodes[3],
  $nodes[2],
  $nodes[1]
)
return local:distinct-nodes-stable($perm)/local-name()
