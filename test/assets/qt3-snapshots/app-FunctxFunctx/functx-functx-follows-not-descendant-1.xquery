declare namespace functx = "http://www.example.com/";

(:~
 : Whether an XML node follows another without being its descendant : : @author W3C XML Query Working Group : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_follows-not-descendant.html : @param $a the first node : @param $b the second node
 :)
declare function functx:follows-not-descendant (
  $a as node()?,
  $b as node()?
) as xs:boolean {
  $a >> $b and empty($b intersect $a/ancestor::node())
};

let $in-xml := <authors>
  <author><fName>Kate</fName><lName>Jones</lName></author>
  <author><fName>John</fName><lName>Doe</lName></author>
</authors>
return (functx:follows-not-descendant($in-xml//author[2], $in-xml//author[1]))
