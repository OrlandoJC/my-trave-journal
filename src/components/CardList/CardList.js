import './CardList.css'
import Card from '../Card/Card'
import travels from '../../data'

const CardList = () => {
    return (
        <div className='CardList'>
            {
                travels.map( travel =>
                    <Card {...travel} />
                )
            }
        </div>
    )
}

export default CardList