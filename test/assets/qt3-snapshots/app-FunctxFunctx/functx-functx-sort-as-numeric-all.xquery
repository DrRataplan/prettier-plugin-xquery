declare namespace functx = "http://www.example.com/";

(:~ : Sorts a sequence of numeric values or nodes : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_sort-as-numeric.html : @param $seq the sequence to sort :)
declare function functx:sort-as-numeric ($seq as item()*) as item()* {
  for $item in $seq
  order by number($item)
  return $item
};

let $in-xml := <in-xml> <f>1</f> <f>35</f> <e>4</e> </in-xml>
return document {
    (
      functx:sort-as-numeric(("1", "100", "99")),
      functx:sort-as-numeric($in-xml/*)
    )
  }
