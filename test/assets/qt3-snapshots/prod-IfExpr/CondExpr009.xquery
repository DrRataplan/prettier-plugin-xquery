if (
  /Root/Customers[1]/@CustomerID = "ALFKI" or
    /Root/Customers[1]/FullAddress/City = "Non-Existent"
) then
  "pass"
else
  "fail"
