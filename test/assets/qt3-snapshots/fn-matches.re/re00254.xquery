(
  every
    $s in
    tokenize(
      "⁰₟,⁰ⁱ⁲⁳⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎₏ₐₑₒₓₔₕₖₗₘₙₚₛₜ₝₞₟",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsSuperscriptsandSubscripts}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsSuperscriptsandSubscripts}+)$"))
  )
