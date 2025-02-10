import { ref } from 'vue';
import axios from 'axios';
// const cors = require('cors');
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

export default function useSales() {
    const sales = ref([]);
    const sale = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getSales = async () => {
        const response = await axios.get('/sales');
        sales.value = response.data.data; // sales in == do not use sale


        
        // console.log(sale.value);
        // try {
        //     // Use axios to fetch data from your API
        //     const response = await axios.get('/sales'); // Replace with your actual API endpoint
        //     sales.value = response.data.data; // Assign the response data to the reactive array
        //   } catch (error) {
        //     console.error('Error fetching sales:', error);
        //   } 
        
        
        

    };

    const getSale = async (id) => {
        const response = await axios.get("sales/" + id);
        sale.value = response.data.data;
        console.log(sale.value);
    };

    const storeSale = async (data) => {
        try {
            await axios.post("sales", data);
            await router.push({name: "SaleIndex"});
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateSale = async (id) => {
        try {
            await axios.put("sales/" + id, sale.value);
            await router.push({name: "SaleIndex"});
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }           
        }
    };

    const destroySale = async (id) => {
        if(!window.confirm("Delete it?")){
            return;
        }

            await axios.delete("sales/" + id);
            await getSales();
    };

    return {
        sale,
        sales,
        getSale,
        getSales,
        storeSale,
        updateSale,
        destroySale,
        errors,
    };
}