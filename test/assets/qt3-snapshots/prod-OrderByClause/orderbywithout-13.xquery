<results>
  {
    for $x in
      (
        <orderData>-100000000000000000</orderData>,
        <orderData>-10000000000000000</orderData>,
        <orderData>-1000000000000000</orderData>,
        <orderData>-100000000000000</orderData>,
        <orderData>-10000000000000</orderData>,
        <orderData>-1000000000000</orderData>,
        <orderData>-100000000000</orderData>,
        <orderData>-10000000000</orderData>,
        <orderData>-1000000000</orderData>,
        <orderData>-100000000</orderData>,
        <orderData>-10000000</orderData>,
        <orderData>-1000000</orderData>,
        <orderData>-100000</orderData>,
        <orderData>-10000</orderData>,
        <orderData>-1000</orderData>,
        <orderData>-100</orderData>,
        <orderData>-10</orderData>,
        <orderData>-1</orderData>,
        <orderData>-0</orderData>
      )
    order by $x is $x
    return $x is $x
  }
</results>
