declare variable $deptnames := map {
  "ACC": "Accessories",
  "WMN": "Women's",
  "MEN": "Men's"
};

deep-equal(
  map:put($deptnames, "SHO", "Shoes"),
  map {"ACC": "Accessories", "WMN": "Women's", "MEN": "Men's", "SHO": "Shoes"}
)
