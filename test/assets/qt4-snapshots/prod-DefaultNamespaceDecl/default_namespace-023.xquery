declare default element namespace "http://www.example.com/test";

let $in := parse-xml("<n:a xmlns:n='http://www.example.com/test'>25</n:a>")
return $in//a
