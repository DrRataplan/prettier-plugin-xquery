(every $s in tokenize(" ,
,
,	", ",") satisfies matches($s, "^(?:\C)$")) and
  (every $s in tokenize("_,:,a", ",") satisfies not(matches($s, "^(?:\C)$")))
