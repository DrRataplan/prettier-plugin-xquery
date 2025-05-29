fn:count(
  (/works/employee[12]/overtime/day[ancestor::overtime]) except
    (/works/employee[12]/overtime/day[ancestor::overtime])
)
