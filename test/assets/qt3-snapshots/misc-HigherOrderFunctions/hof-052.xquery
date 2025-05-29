let $f := fn:concat#3(?, "*", ?)
let $g := $f("[", ?)
return <out>{
    $g("]")
  }</out>
