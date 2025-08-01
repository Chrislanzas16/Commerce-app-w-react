import react from "react";
import Book from "../components/ui/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { books } from '../data';
import { fas } from "@fortawesome/free-solid-svg-icons";


const Final = ({books}) => {
    
    return ( <div id="books__body">
      <main id="books__main">
         <div className="books__container">
            <div className="row">
                
                <div className="book__selected--top">
                    <a className="book__link" href="/books"></a>
                    <a className="book__link" href="/books">
                    <h2 className="book__selected--title--top">Books</h2>
                    </a>
                </div>
                <div className="book__selected"> 
                     <figure className="book__selected--figure">
                        <img src={null} alt="" className="book__selected--img" />
                     </figure>
                     <div className="book__selected--description">
                        <h2 className="book__selected--title">
                            {}
                        </h2>
                     </div>
                </div>
               
            </div>
         </div>
</main>
    </div>
    );
}
export default Final;