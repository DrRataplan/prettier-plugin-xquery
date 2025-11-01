let $s := map {1: "A", "x": "B"} treat as function (xs:anyAtomicType
)
as xs:string?
return $s?*
