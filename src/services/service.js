import axios from 'axios';

//const urlBase = "https://us-central1-retomada-iep.cloudfunctions.net";
const urlBase = "http://localhost:3000/api/v0";

export const getAgenda = async() =>{
    try{
        const response = await axios.get(urlBase + '/getAgenda');
        return(response.data);
    }catch(err){
        console.warn(err);

    }
}
export const getAsks = async() =>{
    try{
        const response = await axios.get(urlBase + '/perguntas/listar/aprovadas');
        return(response.data);
    }catch(err){
        console.warn(err);

    }
}
export const getAllAsks = async() =>{
    try{
        const response = await axios.get(urlBase + '/perguntas/listar/todas');
        return(response.data);
    }catch(err){
        console.warn(err);

    }
}
// export const getBible = async() =>{
//     try{
//         const response = await axios.get('https://bibleapi.co/api/books/gn');
//         return(response.data);
//     }catch(err){
//         console.warn(err);

//     }
// }
// export const getCryptoKey = async() =>{
//     try{
//         const response = await axios.get('https://us-central1-retomada-iep.cloudfunctions.net/getCryptoKey');
//         return(response.data);
//     }catch(err){
//         console.warn(err);
//     }
// }
// export const auth = async(message) =>{
//     try{
//         const response = await axios.post('https://us-central1-retomada-iep.cloudfunctions.net/auth', {content: message});
//         return(response.data);
//     }catch(err){
//         console.warn(err);
//     }
// }
export const sendAsk = async(message) =>{
    try{
        const response = await axios.post(urlBase + '/perguntas/enviar', message);
        return(response.data);
    }catch(err){
        console.warn(err);
    }
}
export const sendVote = async(message, vot) =>{
    try{
        const response = await axios.post(urlBase + '/perguntas/votar', {id: message, voted: vot});
        return(response.data);
    }catch(err){
        console.warn(err);
    }
}
export const sendAproved = async(message) =>{
    try{
        const response = await axios.post(urlBase + '/perguntas/aprovar', {id: message});
        return(response.data);
    }catch(err){
        console.warn(err);
    }
}