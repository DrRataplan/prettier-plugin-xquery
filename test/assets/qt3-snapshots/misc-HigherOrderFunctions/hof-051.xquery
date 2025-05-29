let $f := function ($a as xs:string, $b as xs:string) {
    starts-with($a, $b) and ends-with($a, $b)
  }(?, "a")
return <out>{
    $f("abracadabra")
  }</out>
