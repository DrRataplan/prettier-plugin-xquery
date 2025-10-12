declare function local:namespaces (
  $e as element(*)
) as map(xs:string, xs:anyURI) {
  map:merge(in-scope-prefixes($e)!map {.: namespace-uri-for-prefix(., $e)})
};

let $m := local:namespaces(analyze-string((), "abc"))
return sort($m?*)
