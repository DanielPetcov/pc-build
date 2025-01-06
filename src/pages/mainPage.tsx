import ProductCard from "../components/productCard"
import components from "../data/components"

interface Component { 
    name: string;
    price: number;
    image: string;
    link: string;
    bought: boolean
}

const MainPage = () => {

    const sortComponents = (components : Component[]) => {
        let boughtComponents = [];
        let notBoughtComponents = [];

        for(let i = 0; i < components.length; i++){
            if(components[i].bought){
                boughtComponents.push(components[i]);
            } else {
                notBoughtComponents.push(components[i]);
            }
        }

        return notBoughtComponents.concat(boughtComponents);
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 max-w-[1500px] mx-auto gap-2 gap-y-4 lg:gap-4">
           {sortComponents(components).map((component) => (
            <ProductCard product={component} />
           ))}
        </div>
    )
}

export default MainPage