let $nodes := document { <x><a /><b /><c /><d /><e /></x> }
return subsequence-where(
    $nodes/x/*,
    function ($node) { exists($node[self::c]) }
  )!local-name()
