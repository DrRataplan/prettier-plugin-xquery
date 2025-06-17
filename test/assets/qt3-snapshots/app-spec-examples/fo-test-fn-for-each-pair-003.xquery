let $s := 1 to 8
return fn:for-each-pair($s, tail($s), function ($a, $b) { $a * $b })
