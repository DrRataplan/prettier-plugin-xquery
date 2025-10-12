(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\n\\\r\|\t\.\-\^\?\*\+\{\}\(\)\[\])$")
) and
  (
    every
      $s in
      tokenize("
\
|	.-^?*+{}()[,\
|	.-^?*+{}()[],
\
|	-^?*+{}()[]", ",") satisfies
      not(matches($s, "^(?:\n\\\r\|\t\.\-\^\?\*\+\{\}\(\)\[\])$"))
  )
