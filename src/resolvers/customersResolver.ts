import { CustomersService } from '../services/customersService';

// fetches the relevant data for the GraphQL Query
const getCustomers = async () => {
    return CustomersService.getCustomers();
}

export default getCustomers;
