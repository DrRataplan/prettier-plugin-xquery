(every $s in tokenize("", ",") satisfies matches($s, "^(?:[\w-[b-y]]+)$")) and
  (
    every
      $s in
      tokenize(
        "bbbaaaABCD09zzzyyy,bbbaaaABCD09zzzyyy,bbbaaaABCD09zzzyyy,bbbaaaABCD09zzzyyy",
        ","
      ) satisfies
      not(matches($s, "^(?:[\w-[b-y]]+)$"))
  )
