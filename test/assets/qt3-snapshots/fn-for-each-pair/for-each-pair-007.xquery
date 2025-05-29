let $millenium := year-from-date(current-date()) idiv 1000
return for-each-pair(
    ("a", "ab", "abc", ""),
    ("", "", "", ""),
    function ($a, $b) as xs:integer* {
      1 to (string-length($a) + string-length($b))
    }
  )
