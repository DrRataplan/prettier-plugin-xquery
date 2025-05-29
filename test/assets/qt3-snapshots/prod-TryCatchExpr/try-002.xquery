declare namespace err = "http://www.w3.org/2005/xqt-errors";

try {
  doc("rubbish.xml")
} catch err:FODC0001|err:FODC0002|err:FODC0005 {
  "ok"
}
