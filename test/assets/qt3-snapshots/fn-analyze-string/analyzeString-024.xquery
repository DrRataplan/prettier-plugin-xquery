import schema  "http://www.w3.org/2005/xpath-functions";

let $result := analyze-string("banana", "(b)(anana)")
return $result/fn:match[1] instance of schema-element(fn:match)
