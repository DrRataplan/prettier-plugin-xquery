let $c := "http://www.w3.org/2013/collation/UCA?strength=primary"
return collation-key("abc123", $c) eq collation-key("áBC123", $c)
