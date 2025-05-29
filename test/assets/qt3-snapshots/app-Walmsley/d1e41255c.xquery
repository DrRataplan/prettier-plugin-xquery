declare variable $deptinfo := map {
  "ACC": map {"deptname": "Accessories", "deptnum": 300},
  "WMN": map {"deptname": "Women's", "deptnum": 310},
  "MEN": map {"deptname": "Men's", "deptnum": 320}
};

$deptinfo instance of function(*)
