import '../simpson/simpson.css'
const Character = ({character}) => {
    const {name, status, species, gender, image} = character;
 return (
  <div>
      <div className={'card'}>
          <h2 className={'name2'}>{name}</h2>
          <img className={'image'} src={image} alt={name}/>
          <p className={'paragraph'}>status: {status} species:{species} gender:{gender}</p>
      </div>
  </div>
 );
};

export {Character};