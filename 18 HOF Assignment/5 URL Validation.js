function validateURL(url){

    const urlPattern = /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+$/;

    // ^(https?:\/\/): Ensures the URL starts with http:// or https://
    // [\w\-]+: Matches one or more word characters (letters, digits, and underscores) or hyphens.
    // (\.[\w\-]+)+: Ensures there's at least one dot . followed by one or more word characters or hyphens.
    // The + after (\.[\w\-]+) ensures that the domain can have multiple parts (e.g., example.com, sub.example.com).

    if(urlPattern.test(url)){
        console.log("This is Valid URL.");
    }
    else{
        console.log("This is Invalid URL.");
    }

}


validateURL("https://regexr.com");
validateURL("ftp://regexr.com");  
