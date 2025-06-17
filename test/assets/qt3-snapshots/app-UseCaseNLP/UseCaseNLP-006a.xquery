declare function local:filter (
  $s as item()*,
  $p as function (item()) as xs:boolean
) { array{ $s[$p(.)] }, array{ $s[not($p(.))] } };

let $f := function ($a) { starts-with($a(2), "VB") }
return local:filter(json-doc("speech-representation.json")?*, $f)
