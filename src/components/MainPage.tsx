import Content from "./Content";
import Heading from "./Heading";

function MainPage(){    
    return(
        <div className="page">
            <div className="container">
                <Heading/>
                <Content/>
            </div>
        </div>
    )
}
export default MainPage;