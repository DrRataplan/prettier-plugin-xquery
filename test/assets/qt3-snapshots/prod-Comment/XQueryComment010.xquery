(: Name: XQueryComment010 :)
(: Description: Comments inside a conditional expression :)
if (: comment :) (
  //fs:Folder[1]/fs:FolderName/text() = "Folder00000000000"
) then (: this is the then case :) (
  true()
) else (: this is the else case :) (
  false()
)
