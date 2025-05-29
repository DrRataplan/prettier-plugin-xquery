let $s as function (xs:anyAtomicType) as xs:string? := map {1: "A", "x": "B"}
return $s?*
