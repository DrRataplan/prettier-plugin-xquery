let $in := 1 to 5
return for-each-pair($in, tail($in), function ($a, $b) { $a + $b })
