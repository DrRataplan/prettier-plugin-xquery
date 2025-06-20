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
return (
    functx:is-a-number("123"),
    functx:is-a-number(123),
    functx:is-a-number(" 123 "),
    functx:is-a-number(""),
    functx:is-a-number("123abc"),
    functx:is-a-number("NaN"),
    functx:is-a-number($in-xml/a),
    functx:is-a-number($in-xml/b)
  )
