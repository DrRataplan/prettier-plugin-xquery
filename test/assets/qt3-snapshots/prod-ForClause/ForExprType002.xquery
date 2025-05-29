for $fileName as attribute(name, xs:untypedAtomic) in (//Folder)[1]/File/@name
return data($fileName)
