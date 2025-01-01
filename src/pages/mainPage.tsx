import ProductCard from "../components/productCard"
import components from "../data/components"

const MainPage = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 max-w-[1500px] mx-auto gap-2 lg:gap-4">
           {components.map((component) => (
            <ProductCard product={component} />
           ))}
        </div>
    )
}

export default MainPage