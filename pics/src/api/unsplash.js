import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID e23814d50bf27223ea88560ab55f7a0e960f476f922b0f3116e6411cfccccf0f',
    }
});