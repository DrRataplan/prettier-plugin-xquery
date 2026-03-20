let $q := /inventory/item[serialno = "123456"]/quantity
return (
  replace value of node $q with (),
  insert node attribute xsi:nil { "true" } into $q
)
