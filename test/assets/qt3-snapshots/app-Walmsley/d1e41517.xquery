declare variable $deptnames := map {
  "ACC": "Accessories",
  "WMN": "Women's",
  "MEN": "Men's"
};

let $f := function ($k, $v) {
    concat("Key: ", $k, ", value: ", $v)
  }
return map:for-each($deptnames, $f)
