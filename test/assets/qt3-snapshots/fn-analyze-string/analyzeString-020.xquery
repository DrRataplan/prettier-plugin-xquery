let $result := analyze-string("banana", "(b)(anana)")
return ($result//@nr)[1] instance of attribute(nr, xs:positiveInteger)
