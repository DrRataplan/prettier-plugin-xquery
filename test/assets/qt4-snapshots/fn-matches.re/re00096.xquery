(every $s in tokenize("𐀀", ",") satisfies matches($s, "^(?:[𐀀])$")) and
  (every $s in tokenize("𐀁", ",") satisfies not(matches($s, "^(?:[𐀀])$")))
