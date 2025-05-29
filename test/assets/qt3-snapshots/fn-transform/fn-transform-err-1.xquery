let $result := fn:transform(map {"stylesheet-location": $render})
return $result("output")
