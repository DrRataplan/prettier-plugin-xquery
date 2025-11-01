for $function in (head#1, tail#1)
return fn:replace("1234", "(.)(.)", function ($s, $g) { $function($g) })
