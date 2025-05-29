(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\t\ta\t\tb\t\t)$")
) and
  (
    every
      $s in
      tokenize("		a		b	,	a		b		,		a				,		a			b		", ",") satisfies
      not(matches($s, "^(?:\t\ta\t\tb\t\t)$"))
  )
