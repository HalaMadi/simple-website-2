const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p className="mb-2">© 2024 Mini Store. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="text-light text-decoration-none">
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a href="#" className="text-light text-decoration-none">
            <i className="bi bi-twitter"></i> Twitter
          </a>
          <a href="#" className="text-light text-decoration-none">
            <i className="bi bi-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
