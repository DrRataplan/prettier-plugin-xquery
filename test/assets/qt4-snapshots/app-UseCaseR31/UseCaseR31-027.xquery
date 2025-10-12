Q{http://www.w3.org/2005/xpath-functions/map}merge(
  for $sales in collection($sales-collection-uri)
  let $pname := $sales("product")
  group by $pname
  return map {
      $pname:
        sum(
          for $s in $sales
          return $s("quantity")
        )
    }
)
