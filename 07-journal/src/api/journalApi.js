import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-5864b-default-rtdb.europe-west1.firebasedatabase.app'
     /**https://vue-demos-5864b-default-rtdb.europe-west1.firebasedatabase.app/Nombre/ */
})

export default journalApi