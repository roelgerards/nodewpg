function userID() {
    return 30;
}

function isUserValid() {
    userID();
    if (userID() >= 30){
        return true;
    }
}

if(isUserValid()) {
    console.log("User valid")
} else {
    console.log("User not valid")
}