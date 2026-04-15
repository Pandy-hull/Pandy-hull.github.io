if (document.cookie.includes("signedIn=true")) {
    console.log("User is signed in.");
    document.getElementById("page").hidden = false;
}
