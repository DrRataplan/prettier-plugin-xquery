<results>
  {
    for $x in
      (
        <orderData>-0.000000000000000001</orderData>,
        <orderData>-0.00000000000000001</orderData>,
        <orderData>-0.0000000000000001</orderData>,
        <orderData>-0.000000000000001</orderData>,
        <orderData>-0.00000000000001</orderData>,
        <orderData>-0.0000000000001</orderData>,
        <orderData>-0.000000000001</orderData>,
        <orderData>-0.00000000001</orderData>,
        <orderData>-0.0000000001</orderData>,
        <orderData>-0.000000001</orderData>,
        <orderData>-0.00000001</orderData>,
        <orderData>-0.0000001</orderData>,
        <orderData>-0.000001</orderData>,
        <orderData>-0.00001</orderData>,
        <orderData>-0.0001</orderData>,
        <orderData>-0.001</orderData>,
        <orderData>-0.01</orderData>,
        <orderData>-0.0</orderData>,
        <orderData>-0.1</orderData>
      )
    order by $x is $x
    return $x is $x
  }
</results>
