declare namespace functx = "http://www.example.com/";

declare function functx:id-from-element ($element as element()?) as xs:string? {
  data(($element/@*[id(.) is ..])[1])
};

let $book := (/)
return (functx:id-from-element($book/book/section[1]))
