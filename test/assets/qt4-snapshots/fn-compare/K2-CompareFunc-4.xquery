let $vA := ("B STRING", current-time())[1] treat as xs:string,
  $vB := ("b string", current-time())[1] treat as xs:string
return compare(lower-case($vA), lower-case($vB))
