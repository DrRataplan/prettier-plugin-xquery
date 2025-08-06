declare namespace functx = "http://www.example.com/";

(:~
 : Whether an element has element-only content : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_has-element-only-content.html : @param $element the XML element to test
 :)
declare function functx:has-element-only-content (
  $element as element()
) as xs:boolean {
  not($element/text()[normalize-space(.) != ""]) and $element/*
};

let $in-xml := <in-xml>
  <a />
  <b />
  <c />
  <d>xml</d>
  <e><x>xml</x></e>
  <f>mixed <x>xml</x></f>
  <g><x>xml</x></g>
  <h><x>xml</x><y>xml</y></h>
  <i><x>xml</x><y>xml</y></i>
</in-xml>
return (
  functx:has-element-only-content($in-xml/a),
  functx:has-element-only-content($in-xml/b),
  functx:has-element-only-content($in-xml/c),
  functx:has-element-only-content($in-xml/d),
  functx:has-element-only-content($in-xml/e),
  functx:has-element-only-content($in-xml/f),
  functx:has-element-only-content($in-xml/g),
  functx:has-element-only-content($in-xml/h),
  functx:has-element-only-content($in-xml/i)
)
