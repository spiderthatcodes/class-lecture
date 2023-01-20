import Button from '../../components/Button/Button'

const Card = ({userName, setUserName, setShowModal}) => {
    
  return (
    <div>
        <p onClick={() => setShowModal(false)}>x</p>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <Button text='Sign In'  onClick={setShowModal} changeValue={false}/>
    </div>
  )
}

export default Card
