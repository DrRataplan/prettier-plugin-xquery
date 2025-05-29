let $ordDoc := (/)
return (count(distinct-values($ordDoc//item/@num)))
