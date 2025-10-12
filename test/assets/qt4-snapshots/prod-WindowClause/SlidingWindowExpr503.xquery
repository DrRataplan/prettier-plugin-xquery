for sliding window $w in (1, 2, 3, 4)
  start $s
  at $s
  previous $s when fn:true()
  only end $s
  at $s
  previous $s when $s - $s eq 1
return $w
