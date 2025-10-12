let $vA := (
    "B STRING", current-time(), string("content")
  )[1] treat as xs:string,
  $vB := ("no match", current-time(), string("content"))[1] treat as xs:string
return contains(lower-case($vA), lower-case($vB))
