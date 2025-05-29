import schema default element namespace  "http://www.example.com/XQueryTest/extendedTypes";

for $extended as element(*, extendedWithElementType) in
  //element(*, extendedWithElementType)
let $baseElement as empty-sequence() := $extended/baseElement
return $baseElement
