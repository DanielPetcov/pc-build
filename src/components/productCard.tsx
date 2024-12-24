interface ProductCardProps {
    product: {
        name: string;
        price: number;
        image: string;
        link: string;
    }
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="flex flex-col justify-between gap-6 bg-quaternary p-4 rounded-lg w-fit">
            <div className="w-full max-w-[300px] aspect-square">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col  justify-between gap-6">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <div className="flex justify-between gap-2 items-end">
                    <div>
                        <span className="text-mds font-semibold">Pret: </span>
                        <span className="text-md font-semibold">{product.price} mdl</span>
                    </div>
                    <a href={product.link} target="_blank" className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-tertiary transition-all duration-300">Link produs</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard