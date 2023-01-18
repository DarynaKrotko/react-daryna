import {Simpson} from "../simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {id:1,
        name:'Homer Simpson',
        image:'https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg',
        paragraph:'Homer Jay Simpson (born May 12, 1956) is a man from Springfield. He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds), lazy, and often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesnt'},
        {id:2,
            name:'Marge Simpson',
            image:'https://media.npr.org/assets/img/2013/05/07/ap0908140151727_vert-06dfa531201681c1ebe2d126471494fdeb5048ae-s1100-c50.jpg',
            paragraph:'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie.'},
        {id:3,
            name:'Bart Simpson',
            image:'https://i.pinimg.com/originals/7e/56/46/7e564626fd81ea7f0580d59d16609ec5.png',
            paragraph:'Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1980)is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.'},
        {id:4,
            name:'Lisa Simpson',
            image:'https://media.entertainmentearth.com/assets/images/6d18e00403d94e6fab70ad36f9422214xl.jpg',
            paragraph:'Lisa Marie Simpson (born May 9, 1983) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'},
        {id:5,
            name:'Maggie Simpson',
            image:'https://static.wikia.nocookie.net/simpsons/images/4/45/Star_Snowsuit_Maggie.png',
            paragraph:'Margaret Evelyn Lenny [ "Maggie" Simpson (born January 14, 1988) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons.'},
    ]
 return (
  <div>
      {simpsons.map(simpson =><Simpson key={simpson.id} simpson={simpson} />)}
  </div>
 );
};

export {Simpsons};