for tumbling window $w in (1 to 10)
  start $s
  at $x
  previous $sp
  next $sn when true()
  end $e
  at $y
  previous $ep
  next $en when false()
where count($w) eq 10 and
  $x eq 1 and
  empty($sp) and
  $sn eq 2 and
  $e eq 10 and
  $y eq 10 and
  $ep eq 9 and
  empty($en)
return true()
