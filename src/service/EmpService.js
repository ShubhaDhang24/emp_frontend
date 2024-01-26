import axios from 'axios';


const api="http://localhost:8081/api/v1/employee";

class EmpService{
    getAll(){
        return axios.get(api);
    }
}
export default new EmpService;