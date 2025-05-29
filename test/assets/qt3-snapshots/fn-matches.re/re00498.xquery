(every $s in tokenize("_,:,a", ",") satisfies matches($s, "^(?:\c)$")) and
  (every $s in tokenize(" ,
,
,	", ",") satisfies not(matches($s, "^(?:\c)$")))
