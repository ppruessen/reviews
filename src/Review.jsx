import { FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Review = ({review}) => {
    const { name, job, image, text, changeIndex } = review;

  return (
    <article className="review">
        <div className="img-container">
            <img className="person-img" src={image} alt={name} />
            <span className="quote-icon">
                <FaQuoteRight />
            </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className='btn-container'>
            <button className='prev-btn' onClick={() => changeIndex(-1)} ><FaArrowLeft /></button>
            <button className='next-btn' onClick={() => changeIndex(1)}><FaArrowRight /></button>
        </div>
        <div>
            <button className='btn btn-hipster' onClick={() => changeIndex(0)}>Surprise me!</button>
        </div>
        
    </article>
  )
}
export default Review