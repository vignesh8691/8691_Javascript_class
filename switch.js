var user = "testprep"

switch (user) {
    case "admin":
        console.log("You get full acces");
        break;
    case "testprep":
        console.log("gets access to create/del tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;

    default:
        console.log("Trial user");
        break;
}