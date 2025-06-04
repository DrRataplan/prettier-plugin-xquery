for $e in /employees/employee, $d in $e/department
group by $d
return <department name="{
      $d
    }">
    {
      let $max := max($e/salary)
      return $e[salary = $max]
    }
  </department>
