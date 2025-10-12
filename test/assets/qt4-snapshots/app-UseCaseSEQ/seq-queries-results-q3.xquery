let $i2 := (//incision)[2]
for $a in (//action)[. >> $i2][position() <= 2]
return $a//instrument
