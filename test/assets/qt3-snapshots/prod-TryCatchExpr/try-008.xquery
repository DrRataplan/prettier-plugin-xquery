declare function local:f () {
  doc("rubbish.xml")
};

try {
  local:f()
} catch * {
  "ok"
}
