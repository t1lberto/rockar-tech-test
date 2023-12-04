import { CustomersService } from '../services/customersService';

const getCustomers = async () => {
    return CustomersService.getCustomers();
}

export default getCustomers;
