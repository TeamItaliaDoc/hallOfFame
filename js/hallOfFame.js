var getEloRun = false;
var giocatori = [];

var tornei = [];
tornei[188]={"anno":"2021", "name":"Triangoli", "url":"http://localhost/triangoli", "categoria":"Open", "tipo":"A", "primi":["gfiorito"], "secondi":["plasol"], "terzi":["babilonia"]};
tornei[189]={"anno":"2021", "name":"Campionato Sociale Blitz", "url":"https://www.chess.com/news/view/finali-campionato-sociale-rapid-blitz", "categoria":"Open", "tipo":"A", "primi":["Ndr619"], "secondi":["TimTheEnchanter"], "terzi":[]};
tornei[190]={"anno":"2021", "name":"Campionato Sociale Rapid", "url":"https://www.chess.com/news/view/finali-campionato-sociale-rapid-blitz", "categoria":"Open", "tipo":"A", "primi":["Carbon"], "secondi":["TimTheEnchanter"], "terzi":[]};
tornei[191]={"anno":"2021", "name":"Dentro o fuori", "url":"https://www.chess.com/news/view/dentro-o-fuori", "categoria":"Open", "tipo":"A", "primi":["cherokee751"], "secondi":["dida70"], "terzi":["leobelo","maehard"]};
tornei[192]={"anno":"2020", "name":"Migliore giocatore incontri giornalieri", "url":"https://www.chess.com/club/leaderboard/team-italia-doc", "categoria":"Open", "tipo":"A", "primi":["dag_stinner"], "secondi":["dirkflasche"], "terzi":["88arf"]};
tornei[193]={"anno":"2020", "name":"Migliore giocatore incontri dal vivo", "url":"https://www.chess.com/club/leaderboard/team-italia-doc/live-matches", "categoria":"Open", "tipo":"A", "primi":["dag_stinner"], "secondi":["cherokee751"], "terzi":["il_king"]};
tornei[194]={"anno":"2020", "name":"Blitzkrieg", "url":"", "categoria":"Open", "tipo":"A", "primi":["enithith"], "secondi":["savi-xa"], "terzi":["rescorpio"]};
tornei[195]={"anno":"2020", "name":"Campionato sociale a squadre", "url":"https://www.chess.com/clubs/forum/view/campionato-sociale-a-squadre-2019-css-squadre-e-calendario", "categoria":"Squadra", "tipo":"A", "primi":["paolobarolo","andrea71ra","saurosol","reflex56","leffelover"], "secondi":["sandokann","dairola","elmarba","nick_940"], "terzi":["capfracassa","sashadan","eluros55","sundancek","arturu"]};
tornei[196]={"anno":"2020", "name":"Campionato sociale a squadre", "url":"https://www.chess.com/clubs/forum/view/campionato-sociale-a-squadre-2019-css-squadre-e-calendario", "categoria":"Migliori giocatori", "tipo":"A", "primi":["elmarba"], "secondi":["reflex56"], "terzi":["cats-not-knights"]};
tornei[197]={"anno":"2020", "name":"Torneo dei veterani", "url":"https://www.chess.com/clubs/forum/view/torneo-dei-veterani-quarti-di-finale?page=1", "categoria":"Open", "tipo":"A", "primi":["riccardocioli"], "secondi":["federicomalavasi"], "terzi":["valeriobc"]};
tornei[198]={"anno":"2020", "name":"Carosello", "url":"https://www.chess.com/it/news/view/il-carosello", "categoria":"U1500", "tipo":"C", "primi":["capfracassa"], "secondi":["VittoriaGiuseppe"], "terzi":["Tulpicanistan"]};
tornei[199]={"anno":"2019", "name":"Migliore giocatore incontri giornalieri", "url":"https://www.chess.com/club/leaderboard/team-italia-doc", "categoria":"Open", "tipo":"A", "primi":["DirkFlasche"], "secondi":["Dag_Stinner"], "terzi":["88arf"]};
tornei[200]={"anno":"2019", "name":"Rapid Christmas", "url":"https://www.chess.com/it/news/view/rapid-christmas-2019-classifica-finale-e-premiati", "categoria":"Open", "tipo":"A", "primi":["cavaliereyedi"], "secondi":["kmoreteam"], "terzi":["DirkFlasche"]};
tornei[201]={"anno":"2019", "name":"Rapid Christmas", "url":"https://www.chess.com/it/news/view/rapid-christmas-2019-classifica-finale-e-premiati", "categoria":"U1500", "tipo":"C", "primi":["cavaliereyedi"], "secondi":['kmoreteam'], "terzi":['Tulpicanistan']};
tornei[202]={"anno":"2019", "name":"Rapid Christmas", "url":"https://www.chess.com/it/news/view/rapid-christmas-2019-classifica-finale-e-premiati", "categoria":"U1300", "tipo":"C", "primi":["ytoong"], "secondi":['TheMoonlightKnight'], "terzi":['babilonia']};
tornei[203]={"anno":"2019", "name":"Campionato assoluto", "url":"https://www.chess.com/club/campionato-sociale-assoluto-2019-ed-1", "categoria":"Open", "tipo":"A", "primi":["riccardocioli"], "secondi":["Sandokann"], "terzi":["zenzero314","marza_98"]};
tornei[204]={"anno":"2019", "name":"Semilampo estivo", "url":"https://www.chess.com/tournament/live/semilampo--estivo-1088590", "categoria":"Open", "tipo":"A", "primi":["Carbon"], "secondi":["cats-not-knights"], "terzi":["Ziopolvere"]};
tornei[205]={"anno":"2019", "name":"CSP 2 - Inverno 2018-2019", "url":"https://teamitaliadoc.github.io/campionatoSociale2019I/index.html", "categoria":"Open", "tipo":"A", "primi":["Tulpicanistan"], "secondi":["Dag_Stinner"], "terzi":["Fox7hem"]};
tornei[206]={"anno":"2019", "name":"CSP 2 - Inverno 2018-2019", "url":"https://teamitaliadoc.github.io/campionatoSociale2019I/index.html", "categoria":"U1700", "tipo":"C", "primi":["Implacabile"], "secondi":["pantheon-67"], "terzi":["ytoong"]};
tornei[207]={"anno":"2019", "name":"CSP 2 - Inverno 2018-2019", "url":"https://teamitaliadoc.github.io/campionatoSociale2019I/index.html", "categoria":"U1500", "tipo":"C", "primi":["Tulpicanistan"], "secondi":["kmoreteam"], "terzi":["cavaliereyedi"]};
tornei[208]={"anno":"2019", "name":"CSP 2 - Inverno 2018-2019", "url":"https://teamitaliadoc.github.io/campionatoSociale2019I/index.html", "categoria":"U1300", "tipo":"C", "primi":["KcA550"], "secondi":["NAR14"], "terzi":["thejoker2000"]};
tornei[209]={"anno":"2019", "name":">Torneo di Carnevale - Fast pla", "url":"https://www.chess.com/it/clubs/forum/view/torneo-di-carnevale", "categoria":"Open", "tipo":"A", "primi":["Sandokann"], "secondi":[], "terzi":["Giammi99"]};
tornei[210]={"anno":"2019", "name":">Torneo di Carnevale - Fast pla", "url":"https://www.chess.com/it/clubs/forum/view/torneo-di-carnevale", "categoria":"U1600", "tipo":"C", "primi":["Napoli67"], "secondi":["88arf"], "terzi":["Sandro2116"]};
tornei[211]={"anno":"2018", "name":"Migliore giocatore incontri giornalieri", "url":"https://www.chess.com/club/leaderboard/team-italia-doc", "categoria":"Open", "tipo":"A", "primi":["Dag_Stinner"], "secondi":["DirkFlasche"], "terzi":["deffo2506"]};
tornei[212]={"anno":"2018", "name":"CSP 1 - Estate 2018", "url":"https://teamitaliadoc.github.io/campionatoSociale2018/index.html", "categoria":"Open", "tipo":"A", "primi":["saurosol"], "secondi":["Implacabile"], "terzi":["Dag_Stinner"]};
tornei[213]={"anno":"2018", "name":"CSP 1 - Estate 2018", "url":"https://teamitaliadoc.github.io/campionatoSociale2018/index.html", "categoria":"U1600", "tipo":"C", "primi":["Implacabile"], "secondi":["paulbuhl"], "terzi":["88arf"]};
tornei[214]={"anno":"2018", "name":"CSP 1 - Estate 2018", "url":"https://teamitaliadoc.github.io/campionatoSociale2018/index.html", "categoria":"U1300", "tipo":"C", "primi":["KcA550"], "secondi":["rolmas54"], "terzi":["thejoker2000"]};
tornei[215]={"anno":"2018", "name":"Blitz", "url":"https://www.chess.com/it/clubs/forum/view/campionato-sociale-blitz", "categoria":"Open", "tipo":"A", "primi":["marza_98"], "secondi":["saurosol"], "terzi":["Dag_Stinner"]};
tornei[216]={"anno":"2018", "name":"Blitz", "url":"https://www.chess.com/it/clubs/forum/view/campionato-sociale-blitz", "categoria":"U1500", "tipo":"C", "primi":["eluros55"], "secondi":["tuttod26"], "terzi":["MarcelloPar","linchetto"]};
tornei[217]={"anno":"2018", "name":"Blitz", "url":"https://www.chess.com/it/clubs/forum/view/campionato-sociale-blitz", "categoria":"U1300", "tipo":"C", "primi":["arturu"], "secondi":["Sandro2116"], "terzi":["thejoker2000","KcA550"]};
tornei[218]={"anno":"2018", "name":"Semilampo", "url":"https://www.chess.com/it/clubs/forum/view/i-magnifici-100-campionato-sociale-semilampo", "categoria":"Open", "tipo":"A", "primi":["marza_98"], "secondi":["Dag_Stinner"], "terzi":["saurosol"]};
tornei[219]={"anno":"2018", "name":"Semilampo", "url":"https://www.chess.com/it/clubs/forum/view/i-magnifici-100-campionato-sociale-semilampo", "categoria":"U1500", "tipo":"C", "primi":["Tulpicanistan"], "secondi":["silvio_pao"], "terzi":["Ziopolvere"]};
tornei[220]={"anno":"2018", "name":"Semilampo", "url":"https://www.chess.com/it/clubs/forum/view/i-magnifici-100-campionato-sociale-semilampo", "categoria":"U1300", "tipo":"C", "primi":["pieropare","arturu"], "secondi":[], "terzi":["giuseppececi"]};
tornei[221]={"anno":"2018", "name":"Fast play", "url":"https://www.chess.com/it/clubs/forum/view/torneo-interno-domenica-sera-si-gioca-fast-play", "categoria":"Open", "tipo":"A", "primi":["apalladi"], "secondi":["saurosol"], "terzi":["scacchifor_ever"]};
tornei[222]={"anno":"2018", "name":"Fast play", "url":"https://www.chess.com/it/clubs/forum/view/torneo-interno-domenica-sera-si-gioca-fast-play", "categoria":"U1600", "tipo":"C", "primi":["Tulpicanistan"], "secondi":["kmoreteam"], "terzi":["Sandro2116"]};


function elabora() {
    //Carico i dati di tutti i torne
    for (var i in tornei) {
        //per tutti i primi
        for (var iUser in tornei[i].primi) {
            var username = tornei[i].primi[iUser].toLowerCase();
            //Se non esiste lo creo
            if (! giocatori[username]) 
                creaGiocatore(username);
            
            //Assegno medaglia
            if (tornei[i].tipo == 'A')
                giocatori[username].oroA ++
            else
                giocatori[username].oroC ++;
        }

        //per tutti i secondi
        for (var iUser in tornei[i].secondi) {
            var username = tornei[i].secondi[iUser].toLowerCase();
            //Se non esiste lo creo
            if (! giocatori[username]) 
                creaGiocatore(username);
            
            //Assegno medaglia
            if (tornei[i].tipo == 'A')
                giocatori[username].argentoA ++
            else
                giocatori[username].argentoC ++;
        }

        //Per tutti i terzi
        for (var iUser in tornei[i].terzi) {
            var username = tornei[i].terzi[iUser].toLowerCase();
            //Se non esiste lo creo
            if (! giocatori[username]) 
                creaGiocatore(username);
            
            //Assegno medaglia
            if (tornei[i].tipo == 'A')
                giocatori[username].bronzoA ++
            else
                giocatori[username].bronzoC ++;
        }
    };    

    //Leggo avatar
    getAvatar();
}

function getAvatar() {
    //Cerco avatar
    for (var username in giocatori) {
        /*if (username == 'a550')
        {
            giocatori[username].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg";
           continue;
        }
        */
          getAvatarUrl('https://api.chess.com/pub/player/' + username);
    }
}     

function getAvatarUrl(url)
{
    //Eseguo funzione per ricercare un avatar
    $.getJSON(url,function(dataAvatar){
        if (dataAvatar.avatar) {
            giocatori[dataAvatar.username].avatar = dataAvatar.avatar;
        } else {
            giocatori[dataAvatar.username].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg";
        }
        giocatori[dataAvatar.username].url = dataAvatar.url;
        giocatori[dataAvatar.username].displayName = dataAvatar.url.substr(29, dataAvatar.url.length-29);

        //Se è bannato lo considero già stampato
        if (dataAvatar.status == 'closed:fair_play_violations') {
            giocatori[dataAvatar.username].posizione = 999;
        }

        //Se non ho caricato tuti gli avatar esengo ancora la funzione
        for (var username in giocatori) {
            if (! giocatori[username].avatar) {
                return;
            }
        }
  
        //Finito calcolo. Scrivo i risultati 
        //   Controllo se è già partita la fase di scrittura
        //      se arrivano contemporaneamente più caricamenti potrebbe succedere
        if (! getEloRun)
        {
            getEloRun = true;
            //Stampo medagliere 
            stampaMedagliere('A');
            stampaMedagliere('C');

            //Stampo hall of fame
            stampaMedaglireHoF();

        }
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        getAvatarUrl(this.url);    
        //Per evitare problemi se il giocatore è non esiste,
        //  se va in errore carico l'avatar di default
        //Tolto se il giocatore va in errore bisogna correggere anche stat
        //var username = this.url.substr(33, this.url.length - 32);
        //giocatori[username.toLowerCase()].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg";

    });

}

function creaGiocatore(apiUsername) {
    //Uso apiUsername perchè così posso inviare sia username che displayname
    var username = apiUsername.toLowerCase()
    giocatori[username] = {};
    giocatori[username].username = username;
    giocatori[username].url = '';
    giocatori[username].avatar = '';
    giocatori[username].displayName = '';
    giocatori[username].oroA = 0;
    giocatori[username].argentoA = 0;
    giocatori[username].bronzoA = 0;
    giocatori[username].oroC = 0;
    giocatori[username].argentoC = 0;
    giocatori[username].bronzoC = 0;
    giocatori[username].punti = 0;
    giocatori[username].posizione = 0;
}

function stampaMedagliere(tipo) {

    //Azzero totali
    for (var username in giocatori) {
        giocatori[username].posizione = 0;
        giocatori[username].punti = 0;
    }

    //Calcolo punteggi
    for (var username in giocatori) {
        //Calcolo punti
        if (tipo == 'A')
            giocatori[username].punti = giocatori[username].oroA * 10000 + giocatori[username].argentoA * 100 + giocatori[username].bronzoA
        else
            giocatori[username].punti += giocatori[username].oroC * 10000 + giocatori[username].argentoC * 100 + giocatori[username].bronzoC;
    }

    //Imposto posizione e stampo
    var username = '';
    var max = 0;
    var posizione = 0;
    var nPareggi = 0;
    var oldMax = 0;
    while (max > -1)
    {
        max = -1;
        for (var i in giocatori)
        {
            if ((giocatori[i].posizione == 0) && (giocatori[i].punti > max || (giocatori[i].punti == max) ) && (giocatori[i].punti > 0)) {
                username = i;
                max = giocatori[i].punti;
            }
        }
        if (max > -1) 
        {
            if (oldMax == max)
            {
                nPareggi++;
            } else {
                posizione++;
                posizione += nPareggi;
                nPareggi = 0;
                oldMax = max;
            }    
           giocatori[username].posizione = posizione;

           //Stampo il giocatore
           stampaGiocatore(username,tipo);
        }
    }
   
 }
 
function stampaGiocatore(username, tipo)
{
    //stampo riga    
    var riga = '<tr class="riga">   <td class="med-col1">#'  + giocatori[username].posizione + '</td>  <td class="med-col-Giocatori">'+
        '<table><tbody><tr>        <td>        <img class="classifica-avatar" src="' + giocatori[username].avatar + '">    </td>    <td width="7px"></td>'+
        '<td><div>            <a class="username" href="' + giocatori[username].url + '" target="”_blank”">' + giocatori[username].displayName + '</a>        </div>         </td>    </tr>'+
        '</tbody></table> </td> ';

        if (tipo == 'A')
            riga += '<td class="med-col2">' + giocatori[username].oroA + '</td> <td class="med-col2">' + giocatori[username].argentoA + '</td>  <td class="med-col2">' + giocatori[username].bronzoA + '</td>'
        else
            riga += '<td class="med-col2">' + giocatori[username].oroC + '</td> <td class="med-col2">' + giocatori[username].argentoC + '</td>  <td class="med-col2">' + giocatori[username].bronzoC + '</td>';

    riga += '</tr>';

    if (tipo == 'A')
        $("#medagliereA").append(riga)
    else
        $("#medagliereC").append(riga);
}


function stampaMedaglireHoF() {

    var riga = '';
    //stampo tutti i tornei
    for (var i in tornei) {
        //stampo riga    
        riga = '<tr class="riga">' +
            '<td class="hall-col1">' + tornei[i].anno +'</td>' +
            '<td class="hall-col2"><a href="' + tornei[i].url +'" target="_blank">' + tornei[i].name +'</a></td> ' +
            '<td class="hall-col3">' + tornei[i].categoria + '</td>';
        //Primi
        riga += '<td class="hall-col-Giocatori"><table><tbody>';
        for (var iUser in tornei[i].primi) {
            var username = tornei[i].primi[iUser].toLowerCase();
            riga += '<tr> <td> <img class="classifica-avatar" src="' + giocatori[username].avatar + '"> </td> <td width="7px"></td> <td><div>  <a class="username" href="'+ giocatori[username].url + '" target="”_blank”">' + giocatori[username].displayName + '</a> </div> </td> </tr>';
        }
        riga += '</tbody></table> </td>';
        //secondi
        riga += '<td class="hall-col-Giocatori"><table><tbody>';
        for (var iUser in tornei[i].secondi) {
            var username = tornei[i].secondi[iUser].toLowerCase();
            riga += '<tr> <td> <img class="classifica-avatar" src="' + giocatori[username].avatar + '"> </td> <td width="7px"></td> <td><div>  <a class="username" href="'+ giocatori[username].url + '" target="”_blank”">' + giocatori[username].displayName + '</a> </div> </td> </tr>';
        }
        riga += '</tbody></table> </td>';
        //terzi
        riga += '<td class="hall-col-Giocatori"><table><tbody>';
        for (var iUser in tornei[i].terzi) {
            var username = tornei[i].terzi[iUser].toLowerCase();
            riga += '<tr> <td> <img class="classifica-avatar" src="' + giocatori[username].avatar + '"> </td> <td width="7px"></td> <td><div>  <a class="username" href="'+ giocatori[username].url + '" target="”_blank”">' + giocatori[username].displayName + '</a> </div> </td> </tr>';
        }
        riga += '</tbody></table> </td>';
        //Chiudo riga
        riga += '</tr>';

        console.log(riga);

    //stampo
        $("#hall").append(riga);        
    }
}
