let $C := "http://www.w3.org/2013/collation/UCA?lang=en;caseFirst=lower"
return collation-key("abc", $C) lt collation-key("ABC", $C)
