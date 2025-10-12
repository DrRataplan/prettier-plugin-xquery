let $result := analyze-string("banana", "(b)(anana)")
return string($result/fn:match[1])
