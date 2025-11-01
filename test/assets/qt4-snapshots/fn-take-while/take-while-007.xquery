let $nodes := document { <x><a /><b /><c /><d /><e /></x> }
return take-while(
    $nodes/x/*,
    function ($node) { not($node[self::c]) }
  )!local-name()
