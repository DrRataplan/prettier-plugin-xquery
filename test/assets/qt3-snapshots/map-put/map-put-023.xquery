map {xs:float("1.0"): 0, xs:double("1.00000000001"): 1}
  => map:put(xs:decimal("1.0000000000100000000001"), 2)
  => map:size()
