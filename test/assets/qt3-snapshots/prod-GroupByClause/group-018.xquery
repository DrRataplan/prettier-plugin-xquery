count(
  for $y in ("ax", "bx", "cx", "Ay", "By", "Cy")
  group by $k
      :=
        substring($y, 1, 1)
      collation
        "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive"
  return <group>{
        $y
      }</group>
)
