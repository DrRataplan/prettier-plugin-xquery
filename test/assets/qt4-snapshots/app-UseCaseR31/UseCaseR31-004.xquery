declare namespace map = "http://www.w3.org/2005/xpath-functions/map";

for $employee in /employees/employee
let $salary := $employee/salary
group by $department := $employee/department
let $max-salary := max($salary)
let $highest-earners := $employee[salary = $max-salary]
return map {
    "first":
      map {
        "department": $department,
        "highest earners": $highest-earners/name/text()
      },
    "job type count":
      map:merge(
        for $employee in /employees/employee
        let $salary := $employee/salary
        group by $job-type := $employee/employeeType
        let $totals := count($employee)
        return map {$job-type: $totals}
      )
  }
