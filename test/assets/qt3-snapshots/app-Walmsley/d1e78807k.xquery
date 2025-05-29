declare namespace prod = "http://datypic.com/prod";

let $library :=
  load-xquery-module(
    "http://datypic.com/prod",
    map {
      "context-item": doc("catalog.xml")/catalog,
      "variables": map {xs:QName("prod:label"): "Product Count"}
    }
  )
let $prodsVariableValue := $library?variables?(xs:QName("prod:prods"))
let $countProdArity2 := $library?functions?(xs:QName("prod:countProds"))?2
return $countProdArity2($prodsVariableValue, "ACC")
