function Click(noticia){
        document.getElementById((noticia).toString()).style.display = "none";
		
        document.getElementById(noticia.attributes["class"].value).style.display = "block";
        }