import schema default element namespace  "http://www.example.com/XQueryTest/extendedTypes";

for $extended as element(*, restrictedType) in //element(*, restrictedType)
let $baseElement as element()+ := $extended/node()
return $baseElement
