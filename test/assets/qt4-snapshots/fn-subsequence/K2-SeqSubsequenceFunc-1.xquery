let $start := (current-time(), 2)[2] treat as xs:integer,
  $len := (current-time(), 1)[2] treat as xs:integer
return subsequence((1, 2, 3), $start, $len)
