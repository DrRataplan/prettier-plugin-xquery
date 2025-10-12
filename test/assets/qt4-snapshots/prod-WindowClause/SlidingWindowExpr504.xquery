for sliding window $w in (1, 2, 3, 4)
  start $s
  at $ps
  previous $pps when fn:true()
  only end $s
  at $ps
  previous $pps when $ps - $ps eq 1
return $w
