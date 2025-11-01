let $seq := in-scope-namespaces(
  parse-xml(
    "<a xmlns:p='p.ns' xmlns:q='q.ns'><b xmlns:q='Q.ns' xmlns:r='R.ns'/></a>"
  )//b
)
return ($seq?p, $seq?q, $seq?r)
