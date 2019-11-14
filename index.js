const request = require('request');
const fs = require('fs');

function sendRequest(urlParts) {
    return new Promise((resolve, reject) => {
        request.get('https://serverjars.com/api/' + urlParts, (error, response, body) => {
            if (error) {
                reject({title: 'Error Occurred', message: 'Try again later!'})
            } else {
                try {
                    body = JSON.parse(body);
                    if (body.status === 'error') {
                        reject(body.error);
                    } else {
                        resolve(body.response)
                    }
                } catch (e) {
                    reject({
                        title: 'JSON Parse Error Occurred',
                        message: 'Unable to parse JSON response from server'
                    })
                }

            }
            resolve();
        });
    });
}


function fetchLatest(type) {
    return sendRequest(`fetchLatest/${type}`)
}

function downloadJar(type, version, output) {
    return new Promise((resolve) => {
        let file = fs.createWriteStream(output);
        resolve(request.get(`https://serverjars.com/api/fetchJar/${type}/${version}`).pipe(file));
    });
}

function fetchAll(type) {
    return sendRequest(`fetchAll/${type}`)
}

function fetchTypes() {
    return sendRequest('fetchTypes');

}

function fetchSubTypes(mainType) {
    return sendRequest(`fetchTypes/${type}`)
}


module.exports = {fetchLatest, downloadJar, fetchAll, fetchTypes, fetchSubTypes};
