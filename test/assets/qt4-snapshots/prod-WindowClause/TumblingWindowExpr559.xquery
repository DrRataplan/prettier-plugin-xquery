for tumbling window $w as xs:string* in (1 to 10)
  start $s when true()
  end $e when $e = $s + 1
return count($w)
