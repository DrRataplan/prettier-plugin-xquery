for $s in ("eq", "ne", "gt", "ge", "lt", "le")
return array { for-each-pair((1, 2, 3), (2, 2, 2), op($s)) }
