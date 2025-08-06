let $d := codepoints-to-string(13)
return (
  matches($d || $d || "a" || $d || $d || "b" || $d || $d, "^\r\ra\r\rb\r\r$"),
  matches($d || $d || "a" || $d || $d || "b" || $d || $d, "^\r+a\r+b\r+$"),
  matches($d || $d || "b" || $d || $d || "a" || $d || $d, "^\r\ra\r\rb\r\r$"),
  matches($d || $d || "a" || $d || $d || "b" || $d || "
", "^\r\ra\r\rb\r\r$")
)
