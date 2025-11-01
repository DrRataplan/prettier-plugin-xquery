let $s := (1 to 1000)
return while-do(1, function ($x) { $x = $s }, function ($x) { $x + 1 })
