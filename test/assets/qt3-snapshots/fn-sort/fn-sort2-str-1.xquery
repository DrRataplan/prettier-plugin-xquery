let $r := fn:sort(
  ("boy", "for", "new", "chosen", "black", "pope"),
  (),
  fn:data#1
)
return (
    count($r) eq 6 and
      $r[1] eq "black" and
      $r[2] eq "boy" and
      $r[3] eq "chosen" and
      $r[4] eq "for" and
      $r[5] eq "new" and
      $r[6] eq "pope"
  )
