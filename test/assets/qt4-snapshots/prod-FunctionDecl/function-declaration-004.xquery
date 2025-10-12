declare function local:summary ($emps as element(employee)*) as element(dept)* {
  for $d in distinct-values($emps/deptno)
  let $e := $emps[deptno = $d]
  return <dept>
      <deptno>{ $d }</deptno>
      <headcount>{ count($e) }</headcount>
      <payroll>{ sum($e/salary) }</payroll>
    </dept>
};

local:summary(//employee[location = "Denver"])
