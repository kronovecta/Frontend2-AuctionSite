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
    console.log(JSON.parse(sessionStorage.getItem(json)))
    return JSON.parse(sessionStorage.getItem(json));
}