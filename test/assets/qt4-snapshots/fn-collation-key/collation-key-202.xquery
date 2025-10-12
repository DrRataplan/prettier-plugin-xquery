let $c := "http://www.w3.org/2013/collation/UCA?strength=primary"
return collation-key("abc", $c) eq collation-key("abc", $c)
