try {
  for tumbling window $x as xs:string in (2, 4, 6, 8, 10)
    start $s
    at $spos
    previous $sprev
    next $snext when true()
    end $e
    at $epos
    previous $eprev
    next $enext when true()
  return $x
} catch err:XPTY0004 { 0 }
