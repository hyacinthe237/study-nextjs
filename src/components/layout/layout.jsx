import NavbarComponent from '../header/navbar'
import FooterComponent from '../footer/footer'

function MyLayout({children}) {
    return (
        <div className="md:container md:mx-auto h-full">
            <NavbarComponent />
            {children}
            <FooterComponent />
        </div>
    );
}

export default MyLayout;