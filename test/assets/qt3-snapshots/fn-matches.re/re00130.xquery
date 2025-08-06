let $d := codepoints-to-string(13)
return (
  (
    every
      $s in
      tokenize("
" || $d || "a
" || $d || "b", ",") satisfies
      (matches($s, "^(?:\n\ra\n\rb)$"))
  ) and
    (
      every
        $s in
        tokenize("", ",") satisfies
        not(matches($s, "^(?:\n\ra\n\rb)$"))
    )
)
