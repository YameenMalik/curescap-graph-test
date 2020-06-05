
document.addEventListener('contextmenu', event => event.preventDefault());	
var keys = [];
document.addEventListener("keydown", onKeyPressed);
document.addEventListener("keyup", e => {
    if (e.which == 44){
        postAlert("Captured Image","Print Screen")
    }
    else if (e.which == 123){
        postAlert("Open Source Code","F12")
    }
});

function onKeyPressed(e) {
    var keyCode = e.keyCode;
    var key = e.key;
    if(keys.length == 0 || keys[keys.length-1] !=  key){
        keys.push(key)
    }
    detectSniffing()
}

function postAlert(action,keystrokes){
    var message = action + " Keystrokes: " + keystrokes
    var post = $.post('/api/v1/users/somethingPhishy',{token:cookies.triToken,actions:message,performedAt:Date.now()});
    post.done(function(data){
            //do nothing
    });
}

function detectSniffing(){
    numKeys = keys.length	
    if(numKeys == 0){return}
    else if(numKeys == 2 || numKeys > 2){ 
        if ((keys[numKeys-1] == 'p' || keys[numKeys-1] == 'P') && keys[numKeys-2] == 'Control'){postAlert('Captured Image','Control + P')}
        else if ((keys[numKeys-1] == 'u' || keys[numKeys-1] == 'U') && keys[numKeys-2] == 'Control'){postAlert("Open Source Code", 'Control + U')}
        else if ((keys[numKeys-1] == 's' || keys[numKeys-1] == 'S') && keys[numKeys-2] == 'Control'){postAlert("Save Page Code", 'Control + S')}       
        else if ((keys[numKeys-1] == 's' || keys[numKeys-1] == 'S') && keys[numKeys-2] == 'Meta'){postAlert("Save Page Code", 'Command + S')}
        else if ((keys[numKeys-1] == 'p' || keys[numKeys-1] == 'P') && keys[numKeys-2] == 'Meta'){postAlert('Captured Image','Command + P')}
 
    }
    if(numKeys == 3 || numKeys > 3){
        if ((keys[numKeys-1] == 'c' || keys[numKeys-1] == 'C' ) && keys[numKeys-2] == 'Shift' && keys[numKeys-3] == 'Meta'){postAlert('Open Source Code','Control + Shift + C')}
        else if (keys[numKeys-1] == 'ç' && keys[numKeys-2] == 'Alt' && keys[numKeys-3] == 'Meta'){postAlert('Open Source Code','Control + Shift + C')}
        else if ((keys[numKeys-1] == 'j' || keys[numKeys-1] == 'J' ) && keys[numKeys-2] == 'Shift' && keys[numKeys-3] == 'Meta'){postAlert('Open Source Code','Control + Shift + P')}
        else if ( keys[numKeys-1] == '∆' && keys[numKeys-2] == 'Alt' && keys[numKeys-3] == 'Meta'){postAlert('Open Source Code','Command + Option + J')}
        else if ((keys[numKeys-1] == 'Dead' || keys[numKeys-1] == 'dead') && keys[numKeys-2] == 'Alt' && keys[numKeys-3] == 'Meta'){postAlert('Open Source Code','Command + Option + U')}
        else if ((keys[numKeys-1] == '4' || keys[numKeys-1] == '$') && keys[numKeys-2] == 'Shift' && keys[numKeys-3] == 'Control'){postAlert('Captured Image','Control + Shift + 4')}
        else if ((keys[numKeys-1] == 'i' || keys[numKeys-1] == 'I') && keys[numKeys-2] == 'Shift' && keys[numKeys-3] == 'Control'){postAlert('Open Source Code','Control + Shift + I')}
        else if ((keys[numKeys-1] == 'c' || keys[numKeys-1] == 'C') && keys[numKeys-2] == 'Shift' && keys[numKeys-3] == 'Control'){postAlert('Open Source Code','Control + Shift + C')}
        else if ((keys[numKeys-1] == 'j' || keys[numKeys-1] == 'J') && keys[numKeys-2] == 'Shift' && keys[numKeys-3] == 'Control'){postAlert('Open Source Code','Control + Shift + J')}
        else if ((keys[numKeys-1] == 'p' || keys[numKeys-1] == 'P') && keys[numKeys-2] == 'Shift' && keys[numKeys-3] == 'Control'){postAlert('Open Source Code','Control + Shift + P')}}
}