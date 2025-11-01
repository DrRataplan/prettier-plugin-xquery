fn:replace(
  "A(0)B(1)C(0)D(9)",
  "(.)\((\d)\)",
  function ($s, $g) { $g[1][$g[2] != "0"] }
)
