for $var in ("aa", "bb", "cc", "dd", "ee")
return fn:trace(fn:concat($var, $var), "The Value of concat($var,$var) is: ")
