for sliding window $w in (1 to 10)
  start $s when true()
  end $e when $e - $s eq 2
return <window>{ $w }</window>
