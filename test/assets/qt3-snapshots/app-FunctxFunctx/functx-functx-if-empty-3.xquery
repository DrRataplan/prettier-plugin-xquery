declare namespace functx = "http://www.example.com/";

(:~
 : The first argument if it is not blank, otherwise the second argument : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_if-empty.html : @param $arg the node that may be empty : @param $value the item(s) to use if the node is empty
 :)
declare function functx:if-empty (
  $arg as item()?,
  $value as item()*
) as item()* {
  if (string($arg) != "") then
    data($arg)
  else
    $value
};

let $in-xml := <prices>
  <price discount="10.00">29.99</price>
  <price discount="6.00">39.99</price>
  <price />
  <price discount="">49.99</price>
</prices>
return (functx:if-empty($in-xml//price[99], 0))
