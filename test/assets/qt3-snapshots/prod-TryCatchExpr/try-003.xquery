try {
  doc("rubbish.xml")
} catch *:FODC0001|*:FODC0002|*:FODC0005 {
  "ok"
}
