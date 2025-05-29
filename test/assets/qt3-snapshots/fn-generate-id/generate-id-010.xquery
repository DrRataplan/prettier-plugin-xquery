let $nodes := (/ | //*/(. | @* | comment() | processing-instruction() | text()))
return count($nodes) eq count(distinct-values($nodes/generate-id()))
