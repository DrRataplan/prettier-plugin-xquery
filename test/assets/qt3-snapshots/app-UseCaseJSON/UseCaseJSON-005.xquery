declare namespace map = "http://www.w3.org/2005/xpath-functions/map";

let $products := json-doc("sales.json")?*
return map:merge(
  (
    for $sales in $products
    let $pname := $sales?product
    group by $pname
    return map {
      $pname:
        sum(
          for $s in $sales
          return $s?quantity
        )
    }
  )
)
