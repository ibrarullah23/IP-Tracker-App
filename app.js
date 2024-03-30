
async function getIPData() {
    let searchip = document.getElementById("searchip").value;
    document.getElementById("ip").innerHTML = "Loading. . ."
    document.getElementById("version").innerHTML = "Loading. . ."
    document.getElementById("isp").innerHTML = "Loading. . ."
    document.getElementById("country").innerHTML = "Loading. . ."
    document.getElementById("region").innerHTML = "Loading. . ."
    document.getElementById("city").innerHTML ="Loading. . ."
    if (ValidateIPaddress(searchip)) {
        try {
            if (!searchip) {
                const my = await fetch('https://api.ipify.org/?format=json')
                const myip = await my.json();
                searchip = myip['ip']
                document.getElementById("heading").innerHTML = "Your IP Information"
            }
            const response = await fetch(`https://ipapi.co/${searchip}/json/`);
            const ipdata = await response.json();
            console.log(ipdata)
            setData(ipdata)
        } catch (error) {
            console.error(error);
        }
    }
}
function ValidateIPaddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        document.getElementById("heading").innerHTML = "IP Information"
        return (true)
    }
    if (!ipaddress) {
        document.getElementById("heading").innerHTML = "Your IP Information"
        return true
    }
    alert("You have entered an invalid IP address!")
    return (false)
}

function setData(ipdata) {
    document.getElementById("ip").innerHTML = ipdata["ip"]
    document.getElementById("version").innerHTML = ipdata["version"]
    document.getElementById("isp").innerHTML = ipdata["org"]
    document.getElementById("country").innerHTML = ipdata["country_name"]
    document.getElementById("region").innerHTML = ipdata["region"]
    document.getElementById("city").innerHTML = ipdata["city"]
}
getIPData()