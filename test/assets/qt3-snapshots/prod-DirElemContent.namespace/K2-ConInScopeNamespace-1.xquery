let $i := document { <e1 />, <e2 />, <e3 />, <e4 /> }
return (
  in-scope-prefixes($i/e1),
  in-scope-prefixes($i/e2),
  in-scope-prefixes($i/e3),
  in-scope-prefixes($i/e4)
)
