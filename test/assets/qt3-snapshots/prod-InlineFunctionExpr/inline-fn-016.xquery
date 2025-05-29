let $add :=
  %Q{http://example.com/speed}fast
  %Q{http://example.com/origin}author("Mike") function ($x, $y) {
    $x + $y
  }
return $add(2, 2)
