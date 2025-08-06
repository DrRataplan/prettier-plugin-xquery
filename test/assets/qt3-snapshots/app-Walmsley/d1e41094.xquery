declare variable $deptnames := map {
  "ACC": "Accessories",
  "WMN": "Women's",
  "MEN": "Men's"
};

for $prod in doc("catalog.xml")//product
return <product
  dept-name="{ $deptnames?($prod/@dept) }"
  num="{ $prod/number }" />
