import {Character} from "../character/character";

const Characters = () => {
    const characters = [
        {
            id: 1,
            name: 'Rick Sanchez',
            status:'Alive',
            species:'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 2,
            name: 'Morty Smith',
            status:'Alive',
            species:'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        },
        {
            id: 3,
            name: 'Summer Smith',
            status:'Alive',
            species:'Human',
            gender: 'Female',
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
        },
        {
            id: 4,
            name: ' Birdperson',
            status:'Alive',
            species:'Alien, cyborg',
            gender: 'male',
            image: 'https://pbs.twimg.com/profile_images/640562675307708416/XGzlRdo9_400x400.png'
        },
        {
            id: 5,
            name: 'Mr. Poopybutthole',
            status:'Alive',
            species:'Alien',
            gender: 'Male',
            image: 'https://pluggedin.ru/images/small-file.jpg'
        },
        {
            id: 6,
            name: 'Mr. Meeseeks',
            status:'Non-existence',
            species:'Meeseeks',
            gender: 'Male',
            image: 'https://i.pinimg.com/originals/8b/56/4f/8b564fb080104634adabce40a693e2d8.png'
        },
    ]
 return (
  <div>
      {characters.map(character => <Character key={character.id} character={character}/>)}
  </div>
 );
};

export {Characters};