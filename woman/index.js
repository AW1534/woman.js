export default function () {
    const text = [
    "Put the toilet seat down", 
    "I had a dream that you cheated on me. 😾", 
    "I'm not hungry *takes all of your food*", 
    "I can't stop thinking about you.", 
    "Babe, let's go to the mall.", 
    "Babe, do you love me? 🥺", 
    "Aww, you're so sweet! 🥰", 
    "Babe would you still love me if I was a Lamborghini Aventador LP 750-4 Superveloce Roadster"
];
    const RandText = text[Math.floor(Math.random() * text.length)]
    console.log(RandText);
    return RandText
}
