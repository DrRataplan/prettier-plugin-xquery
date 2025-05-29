declare decimal-format fmt1 decimal-separator = "^";
declare decimal-format fmt2 decimal-separator = "~";

concat(
  format-number(123.45, "9999^999", "fmt1"),
  " and ",
  format-number(123.45, "9999~999", "fmt2")
)
