const http = require("http");
const request = http.request("http://localhost:3000", (res) => {
    if (res.statusCode !== 200) {
        console.error("Error Occurred");
        res.resume();
        return;
    }
    let data = "";
    res.on("data", (chunk) => (data+=chunk));
    res.on("close", () => {
        console.log("Data fetched!");
        console.log(data);
    });
});

request.on("finish", () => {
    console.log("Done");
});

request.end();