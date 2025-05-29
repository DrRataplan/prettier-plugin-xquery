<out>{
  for tumbling window $w in (1, 2, 3, 4)
    start at $s when fn:true()
    end at $e when $s - $e eq 1
  return $s
}</out>
