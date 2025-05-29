declare variable $deptinfo := map {
  "ACC": map {"deptname": "Accessories", "deptnum": 300},
  "WMN": map {"deptname": "Women's", "deptnum": 310},
  "MEN": map {"deptname": "Men's", "deptnum": 320}
};

deep-equal(
  $deptinfo?*[?deptname = "Accessories"],
  map {"deptname": "Accessories", "deptnum": 300}
)
