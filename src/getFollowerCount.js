export function getBearerToken(consumerKey, consumerSecret) {
    return new Promise((resolve, reject) => {
        // resolve(data)
        // reject(error)
        let tokenCredentials = `${consumerKey}:${consumerSecret}`

        let encodedData = window.btoa(tokenCredentials)

        fetch("https://api.twitter.com/oauth2/token", {
            method: 'POST',
            mode: 'cors',
            headers: {
                Authorization: `Basic ${encodedData}`,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: 'grant_type=client_credentials'
        })
            .then(response => { return response.json() })
            .then(response => { resolve(response.access_token) })
            .catch(error => { reject(error) })
    })
};

export function pullFollowerRequest(bearerToken) {
    console.log(bearerToken)
    fetch('https://api.twitter.com/1.1/followers/ids.json?screen_name=twitterdev', {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    })
    .then(response => { return response.json() })
    .then(response => { console.log(response)})
};

