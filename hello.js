console.log("hello");

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// /^[a-zA-z0-9.!#$%&'*+/=?^_`{|}~-]+@/  1st part matches local part of
// email address - e.g. john.doe

/* /@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?/ 2nd part matches domain
 name of email address - e.g. gmail.com   allowing letters, numbers, and
    hyphens (which allows internationalized domain names), but not at the
     beginning or end of the domain name. */

// /(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
/* 3rd part matches the TLD (top level domain) of address - e.g. .com, .co.uk, .edu,  */

function validateEmail(email) {
    return emailRegex.test(email);
    //using test method of the reg expression to test if email passed matches
    // pattern defined in emailRegex
}

let email = 'john.doe@example.com';
//use the validateEmail function to check if given email valid
if (validateEmail(email)) {
    console.log('Valid email');
} else {
    console.log('Invalid email');
}
