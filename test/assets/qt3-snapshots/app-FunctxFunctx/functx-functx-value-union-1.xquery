declare namespace functx = "http://www.example.com/";

(:~
 : The union of two sequences of values : : @author W3C XML Query Working Group : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_value-union.html : @param $arg1 the first sequence : @param $arg2 the second sequence
 :)
declare function functx:value-union (
  $arg1 as xs:anyAtomicType*,
  $arg2 as xs:anyAtomicType*
) as xs:anyAtomicType* {
  distinct-values(($arg1, $arg2))
};

(functx:value-union((1, 2), (3, 4)))
