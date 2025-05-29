let $C := "http://www.w3.org/2013/collation/UCA?lang=en;strength=primary"
return collation-key("abc", $C) eq collation-key("ABC", $C)
