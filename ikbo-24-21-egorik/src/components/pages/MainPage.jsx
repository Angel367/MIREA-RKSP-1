import '../../styles/main.css';
import Header from "../Header";
import Footer from "../Footer"
import MainBody from "../MainBody";
import get_covid_statistics from "../get_covid_statistics";

function MainPage() {
    return (
        <div>
            <Header />
            <div>
                <MainBody propName={get_covid_statistics()} />
            </div>
            <Footer />
        </div>
    );
}



export default MainPage;
