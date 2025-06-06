let $in-xml :=
  <desclist xml:lang="en">
    <desc xml:lang="en-US"><line>A line of text.</line></desc>
    <desc xml:lang="fr"><line>Une ligne de texte.</line></desc>
  </desclist>
return ($in-xml//desc[lang("fr")])
