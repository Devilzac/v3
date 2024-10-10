import axios from 'axios';
const yesnoApi = axios.create({
     baseURL: `https://yesno.wtf/api`
})
export default yesnoApi