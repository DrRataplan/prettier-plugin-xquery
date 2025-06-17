declare namespace map = "http://www.w3.org/2005/xpath-functions/map";

declare variable $storesVar := array
  { unparsed-text-lines("UseCaseR31/stores.json")!parse-json(.) };

declare variable $productsVar := array
  { unparsed-text-lines("UseCaseR31/products.json")!parse-json(.) };

declare variable $salesVar := array
  { unparsed-text-lines("UseCaseR31/sales.json")!parse-json(.) };

array
  {
    for $store in $storesVar?*
    let $state := $store?state
    group by $state
    order by $state
    return map {
        $state:
          array
            {
              for $product in $productsVar?*
              let $category := $product?category
              group by $category
              order by $category
              return map {
                  $category:
                    map:merge(
                      (
                        for $sales in $salesVar?*
                        where $sales?("store number") =
                          $store?("store number") and
                          $sales?product = $product?name
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
                }
            }
      }
  }
