for sliding window $w as xs:integer in (1 to 10)
  start $s when true()
  end $e when $e = $s + 1
return count($w)
