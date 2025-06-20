declare variable $deptinfo := map {
  "ACC": map {"deptname": "Accessories", "deptnum": 300},
  "WMN": map {"deptname": "Women's", "deptnum": 310},
  "MEN": map {"deptname": "Men's", "deptnum": 320}
};

for $prod in doc("catalog.xml")//product
return <product
    dept-code="{ $deptinfo?($prod/@dept)?deptnum }"
    dept-name="{ $deptinfo?($prod/@dept)?deptname }"
    num="{ $prod/number }" />
