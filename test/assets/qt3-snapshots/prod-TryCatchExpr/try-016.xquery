declare function local:f () {
  . + 3
};

try {
  local:f()
} catch err:XPDY0002 {
  true()
}
