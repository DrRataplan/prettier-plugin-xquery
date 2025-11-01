let $input := tokenize("aorta Aorta AORTA aortA äorta ÄORTA AORTÄ")
for $collation in
  (
    "http://www.w3.org/2005/xpath-functions/collation/codepoint",
    "http://www.w3.org/2013/collation/UCA?lang=se;strength=primary;fallback=yes",
    "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive"
  )
return array
    {
      for $token in $input
      order by collation-key($token, $collation)
      return $token
    }
