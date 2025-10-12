<e>
  {
    map:for-each(
      map {"a": 1, "b": 2},
      function ($k, $v) { attribute {$k} { $v } }
    )
  }
</e>
