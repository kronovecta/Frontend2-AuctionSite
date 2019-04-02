export async function createSession(name, type) {
    let url = `http://nackowskis.azurewebsites.net/api/${type}/2050`;
    let promise = await fetch(url);
    let data = await promise.json();
    setSession(name, data);
}

function setSession(name, json) {
    sessionStorage.setItem(name, JSON.stringify(json));
}

export function getSession(json) {
    return JSON.parse(sessionStorage.getItem(json));
}

export function postData(data, type) {
    let url = `http://nackowskis.azurewebsites.net/api/${type}/2050`;

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(function (data) {
        console.log('Request success: ', 'posten skapad');
    })
}

export function deleteData(data, type) {
    console.log(data);
    let url = `http://nackowskis.azurewebsites.net/api/${type}/2050`;
    
    // fetch(url, {
    //     method: 'DELETE',
    //     body: data.AuktionID,
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     }
    // }).then(function(data) {
    //     console.log(data);
    // })

    let requestOptions = {
        method: 'DELETE'
      };
    
      fetch("http://nackowskis.azurewebsites.net/api/Auktion/2050/" + data.AuktionID, requestOptions)
        .then((response) => console.log(response))
        .then((response) => { return response.json(); });
}