let $i := <e xml:lang="en"><b xml:lang="de" /></e>
return lang("de", $i/b/@xml:lang)
