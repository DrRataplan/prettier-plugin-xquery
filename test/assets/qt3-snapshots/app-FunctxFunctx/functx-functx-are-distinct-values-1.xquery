declare namespace functx = "http://www.example.com/";

(:~
 : Whether all the values in a sequence are distinct : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_are-distinct-values.html : @param $seq the sequence of values
 :)
declare function functx:are-distinct-values (
  $seq as xs:anyAtomicType*
) as xs:boolean {
  count(distinct-values($seq)) = count($seq)
};

(functx:are-distinct-values((1, 2, 1, 3)))
