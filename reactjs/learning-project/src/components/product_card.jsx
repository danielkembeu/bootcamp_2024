import { MyCustomButton } from '../App';
import './product_card.css';

export function ProductCard() {
    return (
        <div className='product_card'>
            <div className='product_image' />
            <div className='product_details'>
                <div>
                    <h3>Product name</h3>
                    <p>$500</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            
            <MyCustomButton
                content="Add to cart"
                type="green"
            />
        </div>
    );
}
