let $vA :=
  ("B STRING", current-time(), string("content"))[1] treat as xs:string,
  $vB := ("no match", current-time(), string("content"))[1] treat as xs:string
return starts-with(upper-case($vA), upper-case($vB))
