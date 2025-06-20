declare namespace functx = "http://www.example.com/";

(:~
 : The maximum of a sequence of values, treating them like strings : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_max-string.html : @param $strings the sequence of values
 :)
declare function functx:max-string (
  $strings as xs:anyAtomicType*
) as xs:string? {
  max(
    for $string in $strings
    return string($string)
  )
};

let $in-xml := <in-xml><x>a</x><y>c</y><z>b</z></in-xml>
return (functx:max-string($in-xml/*))
