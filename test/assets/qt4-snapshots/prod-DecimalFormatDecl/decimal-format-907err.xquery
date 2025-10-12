declare decimal-format a:one digit = "$" zero-digit = "0" minus-sign = "_" digit = "#";

declare namespace a = "http://a.com/";
declare namespace b = "http://a.com/";

format-number(931.4857, "000.$$0", "a:one")
