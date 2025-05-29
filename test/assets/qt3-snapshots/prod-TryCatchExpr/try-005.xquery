<out>{
  try {
    doc("rubbish.xml")
  } catch * {
    <caught-error />
  }, try {
    doc("rubbish.xml")
  } catch * {
    <caught-another />
  }
}</out>
