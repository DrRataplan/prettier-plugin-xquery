declare variable $sep := "\s";

declare function local:splitter () as (function (xs:string) as xs:string*)? {
  function ($x as xs:string) {
    for $i in tokenize($x, $sep)
    return upper-case($i)
  }
};

string-join(local:splitter()("A nice cup of tea"), "|")
