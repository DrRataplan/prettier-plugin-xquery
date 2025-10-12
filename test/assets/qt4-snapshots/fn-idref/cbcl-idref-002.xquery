let $doc := document { <root /> }
return fn:empty(fn:idref((), $doc))
