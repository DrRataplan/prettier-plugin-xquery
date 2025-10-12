sort(
  doc("catalog.xml")//product,
  (),
  function ($prod) { $prod/name, $prod/number }
)
