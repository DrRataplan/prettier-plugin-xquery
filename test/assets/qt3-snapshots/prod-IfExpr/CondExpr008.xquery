if (
  /Root/Customers[1]/@CustomerID = "ALFKI" and
    /Root/Customers[1]/FullAddress/City = "Berlin"
) then
  "pass"
else
  "fail"
