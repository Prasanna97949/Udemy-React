import two from "../images/1.jpg"
import three from "../images/2.jpg"
import four from "../images/3.jpg"
import five from "../images/4.jpg"
function Popular(){
    return(
        <div class="Popular">
        <h1 class="Popular__title">Most Popular</h1>
        <p class="Popular__subtitle">Pick the Best</p>
        <div class="Popular__container">
            <div class="course-card">
                <img src={four} alt="sorry error loding"/>
                <h3>2024 Python Data visaulization masterclass</h3>
                <p>Col steel</p>
                <p>4.3⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>

                <div class="course-card">
                    <img src={three} alt="sorry error loding"/>
                    <h3>2024 Web devolpment bootcamp</h3>
                    <p>Col steel</p>
                    <p>4.5 ⭐⭐⭐⭐</p>
                    <p>549 <del> 1000</del></p>
                </div>

                    <div class="course-card">
                        <img src={two} alt="sorry error loding"/>
                        <h3>Maste UI/UX Designing</h3>
                        <p>Col steel</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>349 <del>750</del></p>
                    </div>

                        <div class="course-card">
                            <img src={five} alt="sorry error loding"/>
                            <h3>Basic to advance programming with EMC</h3>
                            <p>Col steel</p>
                            <p>5.0 ⭐⭐⭐⭐⭐</p>
                            <p>649 <del>1100</del></p>
                        </div>
                        <div class="course-card">
                            <img src={two} alt="sorry error loding"/>
                            <h3>2024 Python Data visaulization masterclass</h3>
                            <p>Col steel</p>
                            <p>4.3⭐⭐⭐⭐</p>
                            <p>449 <del>999</del></p>
                        </div>
            
                            <div class="course-card">
                                <img src={three} alt="sorry error loding "/>
                                <h3>2024 Web devolpment bootcamp</h3>
                                <p>Col steel</p>
                                <p>4.5 ⭐⭐⭐⭐</p>
                                <p>549 <del> 1000</del></p>
                            </div>
            
                                <div class="course-card">
                                    <img src={four} alt="sorry error loding "/>
                                    <h3>Maste UI/UX Designing</h3>
                                    <p>Col steel</p>
                                    <p>3.9 ⭐⭐⭐</p>
                                    <p>349 <del>750</del></p>
                                </div>
            
                                    <div class="course-card">
                                        <img src={five} alt="sorry error loding "/>
                                        <h3>Basic to advance programming with EMC</h3>
                                        <p>Col steel</p>
                                        <p>5.0 ⭐⭐⭐⭐⭐</p>
                                        <p>649 <del>1100</del></p>
                                    </div>
                                   
        </div>
    </div>
    )
}
export default Popular