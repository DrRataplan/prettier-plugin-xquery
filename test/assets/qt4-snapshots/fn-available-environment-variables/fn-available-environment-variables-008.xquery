let $all := fn:available-environment-variables()
return count($all) eq count(distinct-values($all))
