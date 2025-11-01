for $f in
  (
    true#0, false#0, concat#2, substring#2, contains#2, identity#1
  )[function-arity(.) = 1]
return map:build(5, $f)
