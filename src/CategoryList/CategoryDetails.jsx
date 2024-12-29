import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loader/Loading";

const CategoryDetails = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useFetch(`https://dummyjson.com/products/category/${name}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }



  return (
    <div className="container py-5">
      <h2 className="text-center py-4">Category: {name}</h2>
      <hr />
      <div className="row g-4">
        {data.products.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column align-items-center text-center">
                <h5 className="card-title text-capitalize">{product.title}</h5>
                {/* <p className="card-text text-truncate text-secondary">{product.description}</p> */}
                <p className="text-success fw-bold">${product.price}</p>
                <span className="badge bg-primary">{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
