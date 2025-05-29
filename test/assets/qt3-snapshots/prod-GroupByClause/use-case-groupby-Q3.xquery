<result>{
    for $sales in $sales-records-doc/*/record
    let $state := $stores-doc/*/store[store-number = $sales/store-number]/state,
      $product := $products-doc/*/product[name = $sales/product-name],
      $category := $product/category,
      $revenue := $sales/qty * $product/price
    group by $state, $category
    order by $state , $category
    return <group>
                     <state>{
            $state
          }</state>
                     <category>{
            $category
          }</category>
                     <total-revenue>{
            sum($revenue)
          }</total-revenue>
                   </group>
  }</result>
