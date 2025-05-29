map:merge(
  (
    map:entry(xs:untypedAtomic("abc"), 1),
    map:entry(xs:string("abc"), 1),
    map:entry(xs:anyURI("abc"), 1),
    map:entry(xs:string("xyz"), 1),
    map:entry(xs:untypedAtomic("xyz"), 1),
    map:entry(QName((), "abc"), 1)
  ),
  map {"duplicates": "use-last"}
)
