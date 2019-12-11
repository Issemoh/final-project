import axios from 'axios'


export default{
    getAll() {
        return axios.get('/api/client/').then( response => {
            return response.data 
        })
    }
}