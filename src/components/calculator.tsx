import components from "../data/components";

interface Component {
    name: string;
    price: number; 
    link: string;
    image: string;
}

const Calculator = () => {

    const totalPrice = components.reduce((acc, component : Component) => acc + component.price, 0);

  return (
    <div>
        <h1 className="text-center text-2xl font-bold">Pret total: {totalPrice} mdl</h1>
    </div>
    
  )
}

export default Calculator;