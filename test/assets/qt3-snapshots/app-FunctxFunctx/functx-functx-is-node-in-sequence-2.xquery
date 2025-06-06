declare namespace functx = "http://www.example.com/";

(:~ : Whether an XML node is in a sequence, based on node identity : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_is-node-in-sequence.html : @param $node the node to test : @param $seq the sequence of nodes to search :)
declare function functx:is-node-in-sequence (
  $node as node()?,
  $seq as node()*
) as xs:boolean {
  some $nodeInSeq in $seq satisfies $nodeInSeq is $node
};

let $in-xml :=
  <prices>
    <price discount="10.00" value="29.99" />
    <price discount="6.00" value="39.99" />
    <price discount="" value="49.99" />
  </prices>
return let $aPrice := <price discount="" value="49.99" />
  return (functx:is-node-in-sequence($in-xml/price[1], $in-xml))
