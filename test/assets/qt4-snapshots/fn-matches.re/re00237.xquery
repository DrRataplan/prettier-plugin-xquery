(
  every
    $s in
    tokenize(
      "඀෿,඀ඁංඃ඄අආඇඈඉඊඋඌඍඎඏඐඑඒඓඔඕඖ඗඘඙කඛගඝඞඟචඡජඣඤඥඦටඨඩඪණඬතථදධන඲ඳපඵබභමඹයර඼ල඾඿වශෂසහළෆ෇෈෉්෋෌෍෎ාැෑිීු෕ූ෗ෘෙේෛොෝෞෟ෠෡෢෣෤෥෦෧෨෩෪෫෬෭෮෯෰෱ෲෳ෴෵෶෷෸෹෺෻෼෽෾෿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsSinhala}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsSinhala}+)$"))
  )
