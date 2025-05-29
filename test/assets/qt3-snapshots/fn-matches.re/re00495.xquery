(every $s in tokenize(" ,
,
,	", ",") satisfies matches($s, "^(?:\I)$")) and
  (every $s in tokenize("_,:,a", ",") satisfies not(matches($s, "^(?:\I)$")))
