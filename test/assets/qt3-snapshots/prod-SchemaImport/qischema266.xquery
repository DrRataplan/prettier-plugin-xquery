declare construction preserve;

declare function local:foo1 ($e as element()) {
  data($e) instance of xs:untypedAtomic
};

declare function local:foo2 ($e as element(*, xs:decimal)) {
  data($e) instance of xs:untypedAtomic
};

declare function local:foo3 ($e as element()) {
  (data($e) + 1) instance of xs:double
};

declare function local:foo4 ($e as element(*, xs:decimal)) {
  (data($e) + 1) instance of xs:double
};

declare function local:foo5 ($e as element(*, xs:decimal)) {
  ($e + 1) instance of xs:double
};

declare function local:foo6 ($e as element(*, xs:decimal)) {
  (data($e) + data($e)) instance of xs:double
};

3
