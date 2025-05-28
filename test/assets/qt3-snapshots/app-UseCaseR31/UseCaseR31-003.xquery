<out>  {
    for $employee in /employees/employee
    let $salary := $employee/salary
    group by $department := $employee/department
    let $max-salary := max($salary)
    let $highest-earners := $employee[salary = $max-salary]
    return <department name="{
          $department
        }">{
          $highest-earners
        }</department>,
    for $employee in /employees/employee
    let $salary := $employee/salary
    group by $job-type := $employee/employeeType
    let $totals := count($employee)
    return <total-by-job-type type="{
          $job-type
        }">{
          $totals
        }</total-by-job-type>
  }</out>
