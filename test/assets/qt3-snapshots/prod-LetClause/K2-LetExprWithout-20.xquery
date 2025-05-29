let $emps := //employee[location = "Denver"]
for $d in distinct-values($emps/deptno)
let $e := $emps[deptno = $d]
return <dept> <deptno>{
    $d
  }</deptno> <headcount> {
    count($e)
  } </headcount> <payroll> {
    sum($e/salary)
  } </payroll> </dept>
