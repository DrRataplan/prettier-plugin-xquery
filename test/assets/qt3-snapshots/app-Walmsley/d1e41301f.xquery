declare variable $deptnames := map {
  "ACC": "Accessories",
  "WMN": "Women's",
  "MEN": "Men's"
};

deep-equal(
  map:remove($deptnames, "ACC"),
  map {"WMN": "Women's", "MEN": "Men's"}
)
