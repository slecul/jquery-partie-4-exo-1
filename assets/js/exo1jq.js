$(function(){
  //Créations de mes variables win/lose/tie.
  var tie = 0;
  var win = 0;
  var lose = 0;
  //je stocke mes var dans l'html pour pouvoir y acceder avec d'autres fonction.
  $('#win').text(win);
  $('#lose').text(lose);
  $('#tie').text(tie);
  //déclaration de ma fonction qui stocke la valeur saisie par l'utilisateur.
  $('.choice').click(function() {
    // je récupère la saisie utilisateur.
    var player = $(this).attr('id');
    // que je stocke dans l'html pour pouvoir y acceder avec d'autres fonctions.
    $('#player').text(player);
  });
  //Déclaration de ma fonction qui crée le shifumi.
  $('#shifumi').click(function(){
    // je récupère dans mon html les valeurs de mes variables win/lose/tie.
    var win = $('#win').text();
    var lose = $('#lose').text();
    var tie = $('#tie').text();
    //je crée un tableau pierre/feuille/ciseaux pour l'ordinateur.
    var shifumi = ['pierre', 'feuille', 'ciseaux'];
    //je récupère la forme saisie par l'utilisateur.
    var player = $('#player').text();
    //je crée une variable aléatoire entre 0, 1 et 2.
    var random = Math.floor(Math.random()*3);
    //l'ordinateur choisit une forme en fonction de ma variable "random"(index dans le tableau).
    var computer = shifumi[random];
    //Si les formes choisies par l'ordi et l'utilisateur, on dit égalité et on incrémente "tie" de 1.
    if(player == computer){
      alert('Égalité ! Votre adversaire a choisi '+computer);
      tie++;
      //Si l'utilisateur gagne, on lui dit "gagné" et on incrémente "win" de 1.
    }else if((player == 'pierre' && computer == 'ciseaux')||(player == 'ciseaux' && computer == 'feuille')||(player == 'feuille' && computer == 'pierre')) {
      alert('Gagné ! Votre adversaire a choisi '+computer);
      win++;
      //Si l'utilisateur perd, on lui dit "perdu" et on incrémente "lose" de 1.
    }else if ((player == 'pierre' && computer == 'feuille')||(player == 'ciseaux' && computer == 'pierre')||(player == 'feuille' && computer == 'ciseaux')) {
      alert('Perdu ! Votre adversaire a choisi '+computer);
      lose++;
    }
    //enfin, on restocke les nouvelles valeurs de win/lose/tie dans l'html.
    $('#win').text(win);
    $('#lose').text(lose);
    $('#tie').text(tie);
    //on fait le ratio victoires/défaites
    var wl = win / lose;
    var wp = win / (lose + tie);
    $('#wl').text(wl);
    $('#wp').text(wp);
  });
});
