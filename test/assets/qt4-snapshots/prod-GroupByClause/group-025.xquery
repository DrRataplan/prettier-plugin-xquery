let $input := tokenize("aorta Aorta AORTA aortA äorta ÄORTA AORTÄ")
for $collation in
  (
    "http://www.w3.org/2005/xpath-functions/collation/codepoint",
    "http://www.w3.org/2013/collation/UCA?lang=se;strength=primary;fallback=yes",
    "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive"
  )
return array
    {
      sort(
        for $token-group in $input
        group by $key := collation-key($token-group, $collation)
        return array { sort($token-group) }
      )
    }
