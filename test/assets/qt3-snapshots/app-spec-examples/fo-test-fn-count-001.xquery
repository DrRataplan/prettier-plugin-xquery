let $po := <PurchaseOrder>
  <line-item>
    <description>Large widget</description>
    <price>8.95</price>
    <quantity>5.0</quantity>
  </line-item>
  <line-item>
    <description>Small widget</description>
    <price>3.99</price>
    <quantity>2.0</quantity>
  </line-item>
  <line-item>
    <description>Tiny widget</description>
    <price>1.49</price>a
         <quantity>805</quantity>
  </line-item>
</PurchaseOrder>
return let $item1 := $po/line-item[1]

  return let $item2 := $po/line-item[2]

    return let $seq1 := ($item1, $item2)

      return fn:count($seq1)
