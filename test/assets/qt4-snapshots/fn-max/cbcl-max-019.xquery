if (
  max(
    for $x in 1 to 10
    return $x mod 9 = 0
  )
) then
  true()
else
  false()
