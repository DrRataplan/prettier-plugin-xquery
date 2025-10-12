map {xs:float("1.0"): 0, xs:double("1.00000000001"): 1}
  => map:remove(xs:decimal("1.0000000000100000000001"))
  => map:size()
