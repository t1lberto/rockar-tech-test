import { ProductsService } from '../services/productsService';

// fetches the relevant data for the GraphQL Query
const getProducts = async () => {
    return ProductsService.getProducts();
}

export default getProducts;
