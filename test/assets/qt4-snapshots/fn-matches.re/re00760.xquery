(every $s in tokenize("", ",") satisfies matches($s, "^(?:[abc\-z-[b]]+)$")) and
  (
    every
      $s in
      tokenize("```aaaccc---zzzbbb", ",") satisfies
      not(matches($s, "^(?:[abc\-z-[b]]+)$"))
  )
