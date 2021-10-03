import "./Body.css"
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Body = (props) => {
    const {img,name,Instructor,rating,price}=props.item;
    

    return (
        <>



        <div className="col-lg-4">
        <div class="card mb-3 " style={{maxWidth: "540px",height:"380px"}}>
            <div class="row g-0  hover">
                
                <div class="col-md-5">
                <img src={img} style={{height:"380px"}} className="img-fluid rounded-start" alt="not found"/>
                    
                </div>
                <div class="col-md-7 ">
                <div class="card-body">
                    <h3 class="card-title fw-bolder">{name}</h3>
                    <h5 class="card-title fw-bolder instuctor">{Instructor}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text fs-5"><small class="text-muted">${price}</small></p>
                    

                   
                   <div className="d-flex">
                       <div>
                           <h5>({rating})</h5>
                       </div>


                           
                   <Rating className='iccon'
                       initialRating={rating}  
                       emptySymbol="far fa-star"
                       // emptySymbol="fas fa-star-o fa-2x"
                       // fullSymbol="fas fa-star fa-2x"
                       fullSymbol="fas fa-star"
                        readonly/>
                   </div>
                   
                </div>
                </div>
                </div>
        
            </div>
            </div>
        

            

            
        </>
    );
};

export default Body;