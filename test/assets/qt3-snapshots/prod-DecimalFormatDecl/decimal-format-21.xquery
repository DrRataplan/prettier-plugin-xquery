declare decimal-format df001 grouping-separator = "!";

import module namespace m = "http://www.w3.org/TestModules/dfd-module-001";

format-number(123456.789, "#!###!###.###", "df001") || "-" || m:do()
