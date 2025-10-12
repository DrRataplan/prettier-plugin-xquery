declare function local:splitter () as (function (xs:string) as xs:string*) {
  function ($x as xs:string) { tokenize($x, "\s") }
};

string-join(local:splitter()("A nice cup of tea"), "|")
