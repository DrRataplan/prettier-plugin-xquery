for $x in
  <t><r><d>1</d><d>1</d><d>1</d></r><r><d>1</d><d>2</d><d>3</d></r><r><d>2</d><d>3</d><d>4</d></r></t>/r,
  $y in
  <t><r><d>1</d><d>1</d><d>1</d></r><r><d>2</d><d>4</d><d>6</d></r><r><d>3</d><d>2</d><d>1</d></r></t>/r
where $x/d/string(.) = $y/d/string(.)
return concat($x, "=", $y)
