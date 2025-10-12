declare namespace functx = "http://www.example.com/";

(:~
 : The first argument if it is not empty, otherwise the second argument : : @author W3C XML Query WG : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_if-absent.html : @param $arg the item(s) that may be absent : @param $value the item(s) to use if the item is absent
 :)
declare function functx:if-absent (
  $arg as item()*,
  $value as item()*
) as item()* {
  if (exists($arg)) then
    $arg
  else
    $value
};

let $in-xml := <prices>
  <price discount="10.00" value="29.99" />
  <price discount="6.00" value="39.99" />
  <price value="69.99" />
  <price discount="" value="49.99" />
</prices>
return (data(functx:if-absent($in-xml//price[1]/@discount, 0)))
