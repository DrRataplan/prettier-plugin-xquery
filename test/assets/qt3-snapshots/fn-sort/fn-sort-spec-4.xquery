let $employees :=
  (
    <emp><name><first>Reginald</first><last>Cawcutt</last></name></emp>,
    <emp><name><first>Hans</first><last>Gro&#xeb;r</last></name></emp>,
    <emp><name><first>Domingo</first><last>De Silveira</last></name></emp>,
    <emp><name><first>Keith</first><last>O'Brien</last></name></emp>,
    <emp><name><first>Susan</first><last>Cawcutt</last></name></emp>,
    <emp><name><first>Martin</first><last>Cawcutt</last></name></emp>
  ),
  $r :=
  fn:sort(
    $employees,
    default-collation(),
    function ($emp) { $emp/name/last, $emp/name/first }
  )
return (
    count($r) eq 6 and
      fn:data($r[1]/name/first) eq "Martin" and
      fn:data($r[2]/name/first) eq "Reginald" and
      fn:data($r[3]/name/first) eq "Susan" and
      fn:data($r[4]/name/first) eq "Domingo" and
      fn:data($r[5]/name/first) eq "Hans" and
      fn:data($r[6]/name/first) eq "Keith"
  )
