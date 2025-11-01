declare default element namespace "http://www.example.com/test";

let $in := parse-xml("<a xmlns='http://www.example.com/test'>25</a>")
return $in//a
