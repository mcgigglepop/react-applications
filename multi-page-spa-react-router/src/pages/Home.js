import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <h1>my home page</h1>
            <p>
                <Link to="/products">the list of products</Link>
            </p>
        </>
        
    );
}

export default HomePage;