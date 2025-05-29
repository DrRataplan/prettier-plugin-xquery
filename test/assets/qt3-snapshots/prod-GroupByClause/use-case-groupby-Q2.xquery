<result>{
  for $sales in $sales-records-doc/*/record
  let $state := $stores-doc/*/store[store-number = $sales/store-number]/state
  let $category := $products-doc/*/product[name = $sales/product-name]/category
  group by $state, $category
  order by $state , $category
  return <group>
                     <state>{
      $state
    }</state>
                     <category>{
      $category
    }</category>
                     <total-qty>{
      sum($sales/qty)
    }</total-qty>
                   </group>
}</result>
