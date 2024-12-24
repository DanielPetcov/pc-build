import ProductCard from "../components/productCard"
import components from "../data/components"

const MainPage = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10">
           {components.map((component) => (
            <ProductCard product={component} />
           ))}
        </div>
    )
}

export default MainPage