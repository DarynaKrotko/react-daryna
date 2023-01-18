import './simpson.css'
const Simpson = ({simpson}) => {
 const {name,image, paragraph} = simpson;
 return (
  <div className={'card'}>
   <h2 className={'name'}>{name}</h2>
   <img className={'image'} src={image} alt={name}/>
   <p className={'paragraph'}>{paragraph}</p>
  </div>
 );
};

export {Simpson};