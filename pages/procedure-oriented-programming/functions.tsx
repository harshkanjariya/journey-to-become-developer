const fnVoidVoid = `
int score = 0;

void gameOver() {
  printf("GAME OVER!!!");
  score = 0;
}
int main () {
  // some variables ...
  // some code to start game ...
  while(true) {
    if (// some condition) {
       gameOver();
       break;
    }
    // continuous game code
    // some code like score++
  }
}
`;

const fnVoidInt = `
void () {
}
int main () {
  
}
`;

function toHtml(s: string) {
  return s
      .trim()
      .replaceAll('\n', '<br/>')
      .replaceAll(/\s/g, '&nbsp;');
}

export default function Functions() {
  return <div className="container">
    <h3>function that returns nothing and accepts nothing</h3>
    i.e. <br/>
    <div className="code" dangerouslySetInnerHTML={{__html: toHtml(fnVoidVoid)}}></div>
    <h3>function that returns nothing but accepts something</h3>
    i.e. <br/>
    <div className="code" dangerouslySetInnerHTML={{__html: toHtml(fnVoidInt)}}></div>
  </div>
}