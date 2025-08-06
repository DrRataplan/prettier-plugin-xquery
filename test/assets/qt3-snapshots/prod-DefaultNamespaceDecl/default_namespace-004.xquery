declare default function namespace "http://example.org";

declare function summary ($emps as element(employee)*) as element(dept)* {
  for $d in fn:distinct-values($emps/deptno)
  let $e := $emps[deptno = $d]
  return <dept>
    <deptno>{ $d }</deptno>
    <headcount>{ fn:count($e) }</headcount>
    <payroll>{ fn:sum($e/salary) }</payroll>
  </dept>
};

summary(//employee[location = "Denver"])
