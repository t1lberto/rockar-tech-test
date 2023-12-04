import { ProductsService } from '../services/productsService';

const getProducts = async () => {
    return ProductsService.getProducts();
}

export default getProducts;
