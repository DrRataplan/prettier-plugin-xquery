declare namespace functx = "http://www.example.com/";
declare namespace new = "http://new";

(:~
 : Adds attributes to XML elements :
 : @author Priscilla Walmsley, Datypic
 : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_add-attributes.html
 : @param $elements the element(s) to which you wish to add the attribute
 : @param $attrNames the name(s) of the attribute(s) to add
 : @param $attrValues the value(s) of the attribute(s) to add
 :)
declare function functx:add-attributes (
  $elements as element()*,
  $attrNames as xs:QName*,
  $attrValues as xs:anyAtomicType*
) as element()? {
  for $element in $elements
  return element {node-name($element)} {
      for $attrName in $attrNames
      return if ($element/@*[node-name(.) = $attrName]) then (
        ) else
          attribute {$attrName} { $attrValues[$seq] },
      $element/@*,
      $element/node()
    }
};

let $in-xml := <in-xml><a>x</a><b att1="x">x</b></in-xml>
return (
    functx:add-attributes(
      $in-xml/a,
      (xs:QName("att1"), xs:QName("att2")),
      (1, 2)
    )
  )
