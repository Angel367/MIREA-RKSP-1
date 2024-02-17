import '../../styles/main.css';
import Header from "../Header";
import Footer from "../Footer"
import LabsBody from "../LabsBody";
import get_covid_statistics from "../get_covid_statistics";

function LabsPage() {
    return (
        <div>
            <Header />
            <div>
                <LabsBody />
            </div>
            <Footer />
        </div>
    );
}



export default LabsPage;
