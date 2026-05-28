import HeaderTop from '../components/HeaderTop'
import FooterBottom from '../components/FooterBottom'

export default function Layout({ children }) {
    return (
        <div>
            <HeaderTop/>
            {children}
            <FooterBottom/>
        </div>
    )
}