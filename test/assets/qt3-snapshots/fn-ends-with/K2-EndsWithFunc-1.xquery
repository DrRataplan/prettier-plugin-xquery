let $vA := (
    "B STRING", current-time(), string("content")
  )[1] treat as xs:string,
  $vB := ("b string", current-time(), string("content"))[1] treat as xs:string
return ends-with(lower-case($vA), lower-case($vB))
