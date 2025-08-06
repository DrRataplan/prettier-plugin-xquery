count(
  let $N := <n x="this ain't no date" />
  return $N[if (@x castable as xs:date) then
    xs:date(@x) gt xs:date("2000-01-01")
  else
    false()]
)
