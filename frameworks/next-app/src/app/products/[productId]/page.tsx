type Props = {
    params: {
        productId: string
    },
}

export default function ProductDetails({ params }: Props) {
    return (
        <h1 className="text-xl">Product details page {params.productId}</h1>
    )
}