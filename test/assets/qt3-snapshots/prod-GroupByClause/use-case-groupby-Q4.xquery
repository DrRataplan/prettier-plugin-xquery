<result>{
  for $store in $stores-doc/*/store
  let $state := $store/state
  group by $state
  order by $state
  return <state
      name="{
        $state
      }"
      >{
      for $product in $products-doc/*/product
      let $category := $product/category
      group by $category
      order by $category
      return <category
          name="{
            $category
          }"
          >{
          for $sales in
            $sales-records-doc/*/record[store-number = $store/store-number and
              product-name = $product/name]
          let $pname := $sales/product-name
          group by $pname
          order by $pname
          return <product name="{
                $pname
              }" total-qty="{
                sum($sales/qty)
              }" />
        }</category>
    }</state>
}</result>
