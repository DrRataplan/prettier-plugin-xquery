declare namespace foo = "test";

let $x := <a><foo:b /><c /><d /></a>
return count($x/foo:* | $x/foo:*)
