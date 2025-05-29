declare namespace i = "http://example.com/compound-values";

declare function i:complex (
  $real as xs:double,
  $imaginary as xs:double
) as map(xs:boolean, xs:double) {
  map {true(): $real, false(): $imaginary}
};

declare function i:real ($complex as map(xs:boolean, xs:double)) as xs:double {
  $complex(true())
};

declare function i:imaginary (
  $complex as map(xs:boolean, xs:double)
) as xs:double {
  $complex(false())
};

declare function i:add (
  $arg1 as map(xs:boolean, xs:double),
  $arg2 as map(xs:boolean, xs:double)
) as map(xs:boolean, xs:double) {
  i:complex(
    i:real($arg1) + i:real($arg2),
    i:imaginary($arg1) + i:imaginary($arg2)
  )
};

declare function i:multiply (
  $arg1 as map(xs:boolean, xs:double),
  $arg2 as map(xs:boolean, xs:double)
) as map(xs:boolean, xs:double) {
  i:complex(
    i:real($arg1) * i:real($arg2) - i:imaginary($arg1) * i:imaginary($arg2),
    i:real($arg1) * i:imaginary($arg2) + i:imaginary($arg1) * i:real($arg2)
  )
};

i:add(i:complex(2, 3), i:complex(1, -6)),
i:multiply(i:complex(2, -1), i:complex(3, 4))
