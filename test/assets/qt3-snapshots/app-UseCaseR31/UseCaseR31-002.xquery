for $e in /employees/employee, $d in $e/department
group by $d
return map {
  "department": $d,
  "highest paid employee":
    let $max := max($e/salary)
    return $e[salary = $max]/name/text()
}
