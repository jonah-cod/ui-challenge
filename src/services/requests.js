import axios from 'axios';

function fetchBStypes() {
    return new Promise((resolve) => {
        axios.get('http://212.71.245.25:9191/businessType/all').then(res => {

            if (res.data.success && res.data.data.length) {
                resolve(res.data.data)
            } else { resolve('error') }
        })
    })
}

function fetchOrgtypes() {
    return new Promise((resolve) => {
        axios.get('http://212.71.245.25:9191/organizationType/all').then(res => {

            if (res.data.success && res.data.data.length) {
                resolve(res.data.data)
            } else { resolve('error') }
        })
    })
}

function fetchCurrency() {
    return new Promise((resolve) => {
        axios.get('http://212.71.245.25:9191/currency/all').then(res => {

            if (res.data.success && res.data.data.length) {
                resolve(res.data.data)
            } else { resolve('error') }
        })
    })
}

function fetchCountry() {
    return new Promise((resolve) => {
        axios.get('http://212.71.245.25:9191/country/all').then(res => {

            if (res.data.success && res.data.data.length) {
                resolve(res.data.data)
            } else { resolve('error') }
        })
    })
}


function postSignUp(data) {
    return new Promise((resolve) => {
        axios.post('http://212.71.245.25:9191/api/auth/signup', data).then(res => {

            if (res.data.success) {
                resolve(res.data.success)
            } else { resolve('error') }
        })
    })
}


function postSignIn(data) {
    return new Promise((resolve) => {

        axios.post('http://212.71.245.25:9191/api/auth/signin', data).then(res => {
            if (res.data.success) {
                resolve(res.data)
            }
        }).catch(err => resolve(err))

    })
}

export { fetchBStypes, fetchOrgtypes, fetchCurrency, fetchCountry, postSignUp, postSignIn }