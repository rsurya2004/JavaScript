function validateLinkedInURL(url) {

    const linkedInPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{4,29}[a-zA-Z0-9]$/;

   
    // ^https:\/\/www\.linkedin\.com\/in\/: Ensures the URL starts with https://www.linkedin.com/in/
    // [a-zA-Z0-9_-]{4,29}: Allows 4 to 29 characters of letters, digits, underscores, or hyphens
    // [a-zA-Z0-9]: Ensures the last character is a letter or digit, making the total length 5 to 30 characters
    // $: Asserts the end of the string

    if (linkedInPattern.test(url)) {
        console.log("This is a Valid LinkedIn profile URL.");
    } else {
        console.log("This is an Invalid LinkedIn profile URL.");
    }
}

validateLinkedInURL("https://www.linkedin.com/in/johndoe123");  // Valid
validateLinkedInURL("https://www.linkedin.com/in/jane_doe!");  //Invalid