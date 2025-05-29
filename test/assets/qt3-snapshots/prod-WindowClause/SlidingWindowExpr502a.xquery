<out>{
  for sliding window $w in (1, 2, 3, 4)
    start at $s when fn:true()
    only end at $e when $e - $s eq 1
  return $w
}</out>
