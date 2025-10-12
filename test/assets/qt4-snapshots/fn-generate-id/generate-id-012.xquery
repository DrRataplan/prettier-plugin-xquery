let $nodes := collection()
return count($nodes) eq count(distinct-values($nodes/generate-id()))
