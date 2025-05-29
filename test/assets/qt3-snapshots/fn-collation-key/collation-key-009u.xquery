let $C := "http://www.w3.org/2013/collation/UCA?lang=en;caseFirst=upper"
return collation-key("abc", $C) gt collation-key("ABC", $C)
