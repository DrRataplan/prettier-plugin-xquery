<results>
  {
    for $x in
      (
        "A String",
        "B String",
        "C String",
        "D String",
        "E String",
        "F String",
        "G String",
        "H String",
        "I String",
        "J String",
        "K String",
        "L String",
        "M String",
        "N String",
        "O String",
        "P String",
        "R String",
        "S String",
        "T String",
        "U String",
        "V String",
        "W String",
        "X String",
        "Y String",
        "Z String"
      )
    order by xs:string($x) descending
    return xs:string($x)
  }
</results>
