not(matches("", "^(?:\n\na\n\nb\n\n)$")) and
  (
    every
      $s in
      tokenize("

a

b;
,
a

b;

,

a

b;

", ",") satisfies
      not(matches($s, "^(?:\n\na\n\nb\n\n)$"))
  )
