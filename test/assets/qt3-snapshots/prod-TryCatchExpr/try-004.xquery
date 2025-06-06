try {
  doc("rubbish.xml")
} catch err:FODC0001 {
  <caught-error code="FODC0001" />
}catch err:FODC0002 {
  <caught-error code="FODC0002" />
}catch err:FODC0005 {
  <caught-error code="FODC0005" />
}catch err:* {
  <caught-error code="other" />
}
