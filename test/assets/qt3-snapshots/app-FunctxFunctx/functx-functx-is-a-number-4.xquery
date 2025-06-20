declare namespace functx = "http://www.example.com/";

(:~
 : Whether a value is numeric : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_is-a-number.html : @param $value the value to test
 :)
declare function functx:is-a-number (
  $value as xs:anyAtomicType?
) as xs:boolean {
  string(number($value)) != "NaN"
};

let $in-xml := <in-xml><a>123</a><b>abc</b></in-xml>
return (functx:is-a-number(""))
