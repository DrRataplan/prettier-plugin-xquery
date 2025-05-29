declare variable $deptnames := map {
  "ACC": "Accessories",
  "WMN": "Women's",
  "MEN": "Men's"
};

deep-equal(
  map:put($deptnames, "ACC", "Other"),
  map {"ACC": "Other", "WMN": "Women's", "MEN": "Men's"}
)
