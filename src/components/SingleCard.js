import './SingleCard.css'
import cover from '/public/img/cover.png';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClik = () => {
        if(!disabled) {
            handleChoice(card)
        }
    }

    return(
        <div className='card'>
            <div className={flipped ? "flipped" : ""}>
                <img className='front' src={card.src} alt='card front' />
                <img className='back' src={cover} onClick={handleClik} alt='card back'/>
            </div>
        </div>
    )
}