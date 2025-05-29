try {
  1 div 0
} catch err:XPST0008 {
  "Division by zero"
}catch xs:* {
  "Division by zero"
}catch *:XPST0008 {
  "Division by zero"
}catch Q{http://www.w3.org/2005/not-xqt-errors}* {
  "Division by zero"
}catch Q{http://www.w3.org/2005/xqt-errors}XPST0008 {
  "Division by zero"
}
