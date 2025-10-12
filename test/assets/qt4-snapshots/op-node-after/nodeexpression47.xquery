(
  (
    $works/works[1]/employee[1]/empnum[1] >>
      $staff/staff[1]/employee[1]/empnum[1]
  ) and
    (
      $works/works[1]/employee[2]/empnum[1] >>
        $staff/staff[1]/employee[2]/empnum[1]
    ) and
    (
      $works/works[1]/employee[3]/empnum[1] >>
        $staff/staff[1]/employee[3]/empnum[1]
    )
) or
  (
    (
      $works/works[1]/employee[1]/empnum[1] <<
        $staff/staff[1]/employee[1]/empnum[1]
    ) and
      (
        $works/works[1]/employee[2]/empnum[1] <<
          $staff/staff[1]/employee[2]/empnum[1]
      ) and
      (
        $works/works[1]/employee[3]/empnum[1] <<
          $staff/staff[1]/employee[3]/empnum[1]
      )
  )
