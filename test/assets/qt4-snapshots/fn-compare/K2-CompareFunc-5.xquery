let $vA := ("B STRING", current-time())[1] treat as xs:string,
  $vB := ("b string", current-time())[1] treat as xs:string
return compare(upper-case($vA), upper-case($vB))
