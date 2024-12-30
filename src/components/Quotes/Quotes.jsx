
import useFetch from '../../hooks/useFetch';
import Loading from '../Loader/Loading';

const Quotes = () => {
  const { data, isLoading } = useFetch('https://dummyjson.com/quotes');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container py-2">
      <h2 className="text-center mb-2"> Quotes</h2>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {data.quotes.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {data.quotes.map((quote, index) => (
            <div
              key={quote.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '300px' }}>
                <p className="text-center px-4 fs-5">{quote.quote}</p>
                <h5 className="text-muted">- {quote.author}</h5>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden ">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Quotes;
