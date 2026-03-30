const axios = require('axios')
const appid = 'ef0b0973b783e0614ac87612ec04344b'
const q = 'Itu'
const units = 'metric'
const lang = 'pt_BR'
const cnt = 2
const baseURL = `https://api.openweathermap.org/data/2.5/forecast`
const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}&cnt=${cnt}`
const minhaPromise = axios.get(url)
minhaPromise.then(res => {
    console.log(res.data)
    console.log('===========')
    return res.data
})
.then(res=> {
    console.log(`cnt: ${cnt}`)
    console.log('===========')
})
.then(res => {
    //pegar o main do primeiro elemento da lista
    
})