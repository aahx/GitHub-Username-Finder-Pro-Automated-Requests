let cookie = "INSERT YOUR COOKIE HERE" 
let authToken = "INSERT YOUR AUTHENTICATION TOKEN HERE";

const availableUsernames = [];

async function checkAvail(value) {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", cookie);

    var formdata = new FormData();
    formdata.append("authenticity_token", authToken);
    formdata.append("value", value);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    const response = await fetch("https://github.com/account/rename_check?suggest_usernames=true", requestOptions);
    const responseText = await response.text();

    try {
        const pattern = /.*is (not )?available\.|.*is unavailable\./g;
        const resultObj = responseText.match(pattern);
        const result = resultObj[0];
        console.log(result);

        const successPatern = /((\w+) is available\.)/;
        if (result.match(successPatern)) {
            availableUsernames.push(value);
            console.log("Available Usernames", availableUsernames);
        };

    } catch (error) {
        console.log("error", error);
        console.log("Available Usernames", availableUsernames);
        throw error;
    }
};

function generateValues() {
    var values = [];

    // Note: All 3-letter usernames were unavailable at the time of testing 
    // Generate 4-letter values
    for (var i = 97; i <= 122; i++) {
        for (var j = 97; j <= 122; j++) {
            for (var k = 97; k <= 122; k++) {
                for (var l = 97; l <= 122; l++) {
                    values.push(
                        String.fromCharCode(i) +
                        String.fromCharCode(j) +
                        String.fromCharCode(k) +
                        String.fromCharCode(l)
                    );
                }
            }
        }
    };

    return values;
};

async function loopThruValues(values) {
    console.log(values);
    for (let i = 0; i < values.length; i++) {
        try {
            checkAvail(values[i]);
            await new Promise(resolve => setTimeout(resolve, 700)); // .7 second time out to prevent "exceeded secondary rate limit"
        } catch {
            console.log("Error occurred. Stopping execution.");
            break; // Break the loop on the first error
        }
    };
    console.log("Available Usernames - end:", availableUsernames);
};

// loopThruValues(["meowtainkingofthehill"]); // A test run here
loopThruValues(generateValues());