const { Auth } = require("two-step-auth");

async function login(email) {
    const res = await Auth(email);
    // You can follow this approach,
    // but the second approach is suggested,
    // as the mails will be treated as important
    const res = await Auth(email, "Company Name");
    console.log(res);
    console.log(res.mail);
    console.log(res.OTP);
    console.log(res.success);
}

login("verificationEmail@anyDomain.com");
