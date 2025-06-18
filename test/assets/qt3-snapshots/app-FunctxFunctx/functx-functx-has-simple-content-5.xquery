declare namespace functx = "http://www.example.com/";

(:~
 : Whether an element has simple content : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_has-simple-content.html : @param $element the XML element to test
 :)
declare function functx:has-simple-content (
  $element as element()
) as xs:boolean {
  $element/text() and not($element/*)
};

let $in-xml := <in-xml>
  <a />
  <b />
  <c />
  <d>xml</d>
  <e><x>xml</x></e>
  <f>mixed <x>xml</x></f>
</in-xml>
return (functx:has-simple-content($in-xml/e))
