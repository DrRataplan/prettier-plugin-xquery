declare namespace prod = "http://datypic.com/prod";

let $library :=
  load-xquery-module(
    "http://datypic.com/prod",
    map {
      "context-item": doc("catalog.xml")/catalog,
      "location-hints": "lib2.xqm",
      "variables": map {xs:QName("prod:label"): "Product Count"}
    }
  )
let $prodsVariableValue := $library?variables?(xs:QName("prod:prods"))
let $countProdArity1 := $library?functions?(xs:QName("prod:countProds"))?1
return $countProdArity1($prodsVariableValue)
