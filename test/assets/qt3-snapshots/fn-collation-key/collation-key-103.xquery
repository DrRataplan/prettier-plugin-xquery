let $c :=
"http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive"
return collation-key("abc123", $c) eq collation-key("ABC123", $c)
