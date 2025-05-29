declare namespace ns1 = "http://example.org/someweirdnamespace";

(# ns1:you-do-not-know-me-as-index #){(some $x in (1, 2, 3) satisfies $x = 2)}
