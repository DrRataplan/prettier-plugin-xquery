let $seq := (1 to 1000, 1, 1)
for tumbling window $w in sort($seq)
  start  when true()
  end $e
  next $n when $e != $n
return $w[2]
