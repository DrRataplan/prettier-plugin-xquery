for sliding window $w as xs:integer in (1 to 10)
  start $s when $s mod 5 = 1
  end $e when $e = $s
return count($w)
