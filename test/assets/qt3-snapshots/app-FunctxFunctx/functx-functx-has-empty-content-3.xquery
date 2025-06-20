declare namespace functx = "http://www.example.com/";

(:~
 : Whether an element has empty content : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_has-empty-content.html : @param $element the XML element to test
 :)
declare function functx:has-empty-content (
  $element as element()
) as xs:boolean {
  not($element/node())
};

let $in-xml := <in-xml>
  <a />
  <b />
  <c />
  <d>xml</d>
  <e><x>xml</x></e>
  <f>mixed <x>xml</x></f>
  <g><x>xml</x></g>
</in-xml>
return (functx:has-empty-content($in-xml/c))
