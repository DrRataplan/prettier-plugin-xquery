let $x := exists((1 to 10)[. mod 2 = 0])
return (1 to 100)[position() mod 2 = 0 and position() mod 3 = 0 and $x]
