import one from "../images/sec-image.jpg"
function Sale(){
    return(
        <div class="saleimage">
        <img src={one} alt="Sale"/>
        <div class="saleimage__offer">
            <h2> Udemy flash sale 24 hours to sale.. Hurry up!</h2>
            <p>Get the top courses at discount. Just one day save but lifetime to learn </p>
        </div>
    </div>
    )
}
export default Sale