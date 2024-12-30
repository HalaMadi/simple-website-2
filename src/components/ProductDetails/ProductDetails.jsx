import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loading from '../Loader/Loading'

const ProductDetails = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch(`https://dummyjson.com/products/${id}`)

  if (error) {
    return <div className="alter alter-danger">Product Not Found</div>
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="container py-3">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={data.thumbnail} className="card-img-top " alt={`thumbnail of ${data.title}`} />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h4 className="card-title">{data.title}</h4>
              <hr />
              <h5>Product Details :</h5>
              <p className="card-text text-muted">{data.description}</p>
              <span style={{ backgroundColor: "#FF7F3E" }} className="badge fs-6">{data.price} $</span>
              <hr />
              <p className='fw-semibold'>Tags : <span style={{color:"#FF5F1E"}}>{data.tags.join(" , ")}</span></p>
            </div>
            <div  className='d-flex flex-wrap justify-content-center align-items-center '> 
            {data.images.map((img,index)=>
              <img src={img} key={index}  className="img-thumbnail me-5 mb-3"  style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
              }}  />
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails