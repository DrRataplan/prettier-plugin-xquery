declare variable $deptnames := map {
  "ACC": "Accessories",
  "WMN": "Women's",
  "MEN": "Men's"
};

for $d in ("ACC", "MEN")
return $deptnames?($d)
