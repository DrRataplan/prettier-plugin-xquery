declare decimal-format a:one digit = "$";
declare decimal-format two digit = "$";
declare decimal-format three digit = "$";
declare decimal-format four digit = "$";
declare decimal-format five digit = "$";
declare decimal-format b:one minus-sign = "_";
declare default decimal-format minus-sign = "_";

declare namespace a = "http://a.com/";
declare namespace b = "http://a.com/";

format-number(931.4857, "000.$$0")
