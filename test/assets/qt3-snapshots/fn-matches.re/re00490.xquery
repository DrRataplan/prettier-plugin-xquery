(every $s in tokenize("_,:,a", ",") satisfies matches($s, "^(?:\i)$")) and
  (every $s in tokenize(" ,
,
,	", ",") satisfies not(matches($s, "^(?:\i)$")))
