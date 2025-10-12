if (true()) then
  1
else
  error(
    QName("http://www.example.com/errors", "err:oops"),
    "Oops, this error should not be raised!"
  )
