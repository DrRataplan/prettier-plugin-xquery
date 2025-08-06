declare namespace map = "http://www.w3.org/2005/xpath-functions/map";

array
  {
    for $store in json-doc("stores.json")?*
    let $state := $store?state
    group by $state
    order by $state
    return map {
      $state:
        array
          {
            for $product in json-doc("products.json")?*
            let $category := $product?category
            group by $category
            order by $category
            return map {
              $category:
                map:merge(
                  (
                    for $sales in json-doc("sales.json")?*
                    where $sales?("store number") = $store?("store number") and
                      $sales?product = $product?name
                    let $pname := $sales?product
                    group by $pname
                    order by $pname
                    return map {
                      $pname:
                        sum(
                          for $s in $sales
                          return $s?quantity
                        )
                    }
                  )
                )
            }
          }
    }
  }
