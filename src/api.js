export async function createSession(name, type, id) {
    let url = `http://nackowskis.azurewebsites.net/api/${type}/2050`;
    typeof id !== 'undefined' ? url += `/${id}` : url += ''; //kanske ger error :D
    let promise = await fetch(url);
    let data = await promise.json();
    await setSession(name, data);
}

function setSession(name, json) {
    sessionStorage.setItem(name, JSON.stringify(json));
}

export function getSession(json) {
    return JSON.parse(sessionStorage.getItem(json));
}

export async function postData(data, type) {
    let url = `http://nackowskis.azurewebsites.net/api/${type}/2050`;

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(function (data) {
        // console.log('Request success: ', 'posten skapad');
    })
}

export function updateData(data, type) {
    let url = `http://nackowskis.azurewebsites.net/api/${type}/2050`;

    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(function (data) {
        // console.log('Request success: ', 'posten skapad');
    })
}

export async function deleteData(data, type) {
    let url = `http://nackowskis.azurewebsites.net/api/${type}/2050/`;
    
    if (type === "bud") {
        await fetch(url + data.BudID, { method: 'DELETE' })
    } else {
        await fetch(url + data.AuktionID, { method: 'DELETE' })
    }
}