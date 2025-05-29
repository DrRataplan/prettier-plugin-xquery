(every $s in tokenize("", ",") satisfies matches($s, "^(?:(foo)\s+(bar))$")) and
  (
    every
      $s in
      tokenize(
        "before textfoo barafter text,before textfoo barafter text,before textfoo barafter text",
        ","
      ) satisfies
      not(matches($s, "^(?:(foo)\s+(bar))$"))
  )
