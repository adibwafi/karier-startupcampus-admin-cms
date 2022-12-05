import { Link, useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  return (
    <div className="container fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
        <p className="mx-auto text-muted py-3 my-2">&copy; Startup Campus. All right reserved, 2022.</p>

      </footer>
    </div>
  );
}
