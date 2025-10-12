every
  $x as xs:string in
  ("cat", "dog", "rat"), $y as xs:integer in
  (3, 3, 3) satisfies
  fn:string-length($x) = $y
