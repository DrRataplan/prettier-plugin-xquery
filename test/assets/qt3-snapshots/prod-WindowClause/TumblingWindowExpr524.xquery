for tumbling window $w in (1 to 10)
  start $s
  previous $w when true()
  end $e when false()
return <window>{ $w }</window>
