import { Link} from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Loading from "../Loader/Loading"

const Category=()=> {
  const { data, isLoading,error } = useFetch('https://dummyjson.com/products/categories')
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      {error?<div className='alert alert-danger'>{error}</div>:''}
      <div className="container py-5">
      <h2 className="text-center py-4">Categories</h2>
      <hr />
      <div className="row g-5">
        {data.map((category, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center text-center">
                <h5 className="card-title text-capitalize">{category.name}</h5>
                <Link to={`/category/${category.name}`} className="btn btn-primary mt-auto">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Category