let $nodes := (/ | //*/(. | @* | comment() | processing-instruction() | text()))
return every
    $id in
    $nodes/generate-id() satisfies
    matches($id, "^[A-Za-z][A-Za-z0-9]*$")
