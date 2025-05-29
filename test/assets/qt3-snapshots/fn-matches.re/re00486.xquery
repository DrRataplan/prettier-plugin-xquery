(every $s in tokenize("a", ",") satisfies matches($s, "^(?:\S)$")) and
  (every $s in tokenize(" ,
,
,	,aa", ",") satisfies not(matches($s, "^(?:\S)$")))
