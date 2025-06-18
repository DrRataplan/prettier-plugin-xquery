let $seq := (1 to 1000, 1, 1)
let $counts := fold-left(
  $seq,
  map {},
  function ($sofar, $this) {
    map:put($sofar, $this, head(($sofar($this) + 1, 1)))
  }
)
return map:for-each($counts, function ($key, $count) { $key[$count > 1] })
