<out>{
    for sliding window $w in (0, 1, 2, 3, 4, 14, 13, 12, 11)
      start $s when fn:true()
      only end $e when $e eq $s + 10
    return string-join($w!string(), "-")
  }</out>
