declare function local:window () {
  for tumbling window $w in (1 to 10)
    start $s when true()
    end $e when $e - $s eq 3
  return <window>{ $w }</window>
};

local:window()
