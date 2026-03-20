insert node $new-police-report as last into fn:doc(
  "insurance.xml"
)/policies/policy[id = $pid]/driver[license = $license]/accident[date =
  $accdate]/police-reports
