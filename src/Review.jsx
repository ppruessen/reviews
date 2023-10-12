import { FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Review = ({review}) => {
    const { id, name, job, image, text, index, length, changeIndex } = review;

  return (
    <div className="review">
        <div className="img-container">
            <img className="person-img" src={image} alt={name} />
            <div className="quote-icon">
                <FaQuoteRight />
            </div>
        </div>
        <div className="author">
            {name}
        </div>
        <div className="job">{job}</div>
        <div className="info">{text}</div>
        <div className='btn-container'>
            <button className='prev-btn' onClick={() => changeIndex(index - 1)} ><FaArrowLeft /></button>
            <button className='prev-btn' onClick={() => changeIndex(index + 1)}><FaArrowRight /></button>
        </div>
        <div>
            <button className='btn btn-hipster' onClick={() => changeIndex(Math.floor(Math.random() * (length - 1)))}>Surprise me!</button>
        </div>
        
    </div>
  )
}
export default Review