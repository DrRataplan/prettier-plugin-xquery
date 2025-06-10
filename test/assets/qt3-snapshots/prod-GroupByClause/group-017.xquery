count(
  for $y in ("ax", "bx", "cx", "Ay", "By", "Cy")
  group by $k
      :=
        substring($y, 1, 1)
      collation
        "http://www.w3.org/2010/09/qt-fots-catalog/collation/caseblind"
  return <group>{
      $y
    }</group>
)
