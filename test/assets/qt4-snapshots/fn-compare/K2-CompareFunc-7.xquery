let $vA := ("B STRING", current-time())[1] treat as xs:string,
  $vB := ("no match", current-time())[1] treat as xs:string
return compare(upper-case($vA), upper-case($vB))
