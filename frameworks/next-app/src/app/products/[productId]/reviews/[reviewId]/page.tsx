type Props = {
    params: {
        productId: string,
        reviewId: string,
    },
}

export default function ReviewDetails({ params }: Props) {
    return <>
        <h1 className="text-xl">Review details</h1>
        <h2>Product {params.productId}</h2>
        <h2>Review {params.reviewId}</h2>
    </>
}