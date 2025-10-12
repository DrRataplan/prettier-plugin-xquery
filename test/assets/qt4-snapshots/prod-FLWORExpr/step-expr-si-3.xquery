import schema default element namespace  "http://www.example.com/XQueryTest/extendedTypes";

for $extended as element(*, anotherBaseType) in
  //element(restrictedAttribute, anotherBaseType)
let $baseElement as element(baseElement) := $extended/baseElement
return $baseElement
