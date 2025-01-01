interface ProductCardProps {
    product: {
        name: string;
        price: number;
        image: string;
        link: string;
        bought: boolean
    }
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className={`flex flex-col lg:justify-between gap-6 p-4 rounded-lg w-full relative ${product.bought ? 'bg-green-50' : "bg-yellow-50"}`}>
            <div className="w-full max-w-[300px] aspect-square mx-auto h-[150px] lg:h-auto">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col  justify-between gap-6 h-full">
                <h3 className="text-lg font-bold line-clamp-3">{product.name}</h3>
                <div className="flex flex-col lg:flex-row justify-between gap-2 lg:items-end">
                    <div>
                        <span className="text-mds font-semibold">Pret: </span>
                        <span className="text-md font-semibold">{product.price} mdl</span>
                    </div>
                    <a href={product.link} target="_blank" className="bg-secondary text-white text-center px-4 py-2 rounded-md hover:bg-tertiary transition-all duration-300">Link produs</a>
                </div>
            </div>

            {/* price tag */}
            {(product.bought) ?
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-fit bg-green-300 text-white font-semibold p-2 rounded-md">
                    <p>Cumparat</p>
                </div>
             : undefined}
        </div>
    )
}

export default ProductCard