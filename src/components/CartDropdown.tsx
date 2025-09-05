import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { X, Plus, Minus } from 'lucide-react';
import { cartState, cartTotalSelector } from '../recoil/atoms';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const cartTotal = useRecoilValue(cartTotalSelector);

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border border-primary-100 z-50">
      <div className="p-4 border-b border-primary-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-primary-500">Shopping Cart</h3>
          <button onClick={onClose} className="text-primary-400 hover:text-primary-600">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="max-h-64 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="p-4 text-center text-primary-400">
            Your cart is empty
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="p-4 border-b border-primary-50">
              <div className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-primary-600 text-sm">{item.name}</h4>
                  <p className="text-accent-500 font-semibold">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-primary-400 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-4 border-t border-primary-100">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-primary-600">Total:</span>
            <span className="font-bold text-accent-500 text-lg">${cartTotal}</span>
          </div>
          <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 font-medium">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;