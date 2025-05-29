(
  every
    $s in
    tokenize(
      "ㆠㆿ,ㆠㆡㆢㆣㆤㆥㆦㆧㆨㆩㆪㆫㆬㆭㆮㆯㆰㆱㆲㆳㆴㆵㆶㆷㆸㆹㆺㆻㆼㆽㆾㆿ",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsBopomofoExtended}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsBopomofoExtended}+)$"))
  )
