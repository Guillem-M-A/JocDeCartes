export class Joc {
  public players: string[] = ['Guillem', 'Manel', 'Louis'];
  public stack: string[] = [];
  public punts: any[]=[0,0,0];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for(let i = 1; i < 13; i++) {
      this.stack.push('spade_' + i)
      this.stack.push('hearts_' + i)
      this.stack.push('clubs_' + i)
      this.stack.push('diamonds_' + i)

      shuffle(this.stack);
    }
  }
}

function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
// for(let i = 0; i < 3; i++) {
//   // @ts-ignore
//   if(i == this.game?.currentPlayer) {
//     // @ts-ignore
//     this.game?.punts[i]+this.game?.currentCard;
//   }
// }
