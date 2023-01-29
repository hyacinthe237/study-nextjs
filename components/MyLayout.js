import Navbar from './Navbar'
import Footer from './Footer'
function MyLayout({children}) {
    return (
        <div className='container'>
            <Navbar></Navbar>
            {children}
            <Footer />
        </div>
    );
}

export default MyLayout;