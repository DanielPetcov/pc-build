import components from "../data/components";

interface Component {
    name: string;
    price: number; 
    link: string;
    image: string;
    bought: boolean;
}

const Calculator = () => {
    const totalPrice = components.reduce((acc, component : Component) => acc + component.price, 0);
    const boughtPrice = components.reduce((acc, component : Component) => acc + (component.bought ? component.price : 0), 0);;
    const remainingPrice = totalPrice - boughtPrice;

  return (
    <div>
        <h1 className="text-center text-2xl font-bold">Pret total: {totalPrice} mdl</h1>
        <h2 className="text-center text-xl font-bold">Pret ramas: {remainingPrice} mdl</h2>
    </div>
    
  )
}

export default Calculator;