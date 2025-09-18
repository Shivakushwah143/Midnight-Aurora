import { atom, selector } from 'recoil';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const cartState = atom<Product[]>({
  key: 'cartState',
  default: [],
});

export const wishlistState = atom<Product[]>({
  key: 'wishlistState',
  default: [],
});

export const categoryFilterState = atom<string>({
  key: 'categoryFilterState',
  default: 'all',
});

export const productsSelector = selector<Product[]>({
  key: 'productsSelector',
  get: async () => {
    try {
      // Mock jewelry products since we need jewelry-specific data
      const mockProducts: Product[] = [
        {
          id: '1',
          name: 'Midnight Aurora Ring',
          price: 299,
          image: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'rings',
          description: 'Handcrafted with celestial inspiration',
        },
        {
          id: '2',
          name: 'Starlight Necklace',
          price: 459,
          image: 'https://images.pexels.com/photos/1454169/pexels-photo-1454169.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'necklaces',
          description: 'Elegant pendant with sparkling details',
        },
        {
          id: '3',
          name: 'Cosmic Earrings',
          price: 199,
          image: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'earrings',
          description: 'Delicate drops inspired by falling stars',
        },
        {
          id: '4',
          name: 'Galaxy Bracelet',
          price: 349,
          image: 'https://images.pexels.com/photos/1454170/pexels-photo-1454170.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'bracelets',
          description: 'Luxurious chain with celestial charms',
        },
        {
          id: '5',
          name: 'Lunar Eclipse Ring',
          price: 399,
          image: 'https://images.pexels.com/photos/1454175/pexels-photo-1454175.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'rings',
          description: 'Bold design with mysterious allure',
        },
        {
          id: '6',
          name: 'Venus Chain',
          price: 279,
          image: 'https://images.pexels.com/photos/1454176/pexels-photo-1454176.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'necklaces',
          description: 'Minimalist elegance with golden accents',
        },
      ];
      return mockProducts;
    } catch {
      return [];
    }
  },
});

export const cartTotalSelector = selector({
  key: 'cartTotalSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, product) => total + product.price, 0);
  },
});

export const filteredProductsSelector = selector({
  key: 'filteredProductsSelector',
  get: ({ get }) => {
    const products = get(productsSelector);
    const categoryFilter = get(categoryFilterState);
    
    if (categoryFilter === 'all') {
      return products;
    }
    
    return products.filter(product => product.category === categoryFilter);
  },
});