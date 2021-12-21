class Api {//буква длжна быть мала
    constructor(options) {
      this.options=options;
    }
  
    _check(res){
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    
    getInitialCards() {
      return fetch(`${api.options.baseUrl}/charsheets`, {
        "credentials": "include",
        headers: this.options.headers
      })
      .then(res => {
        return this._check(res)
      })
    }
    
    initProfileFomServer(){
      return fetch(`${api.options.baseUrl}/users/me `, {
        "credentials": "include",
        headers: this.options.headers
      })
      .then(res => {
        return this._check(res)
      })
    }
  
    postCardToServer(charName,charUrl,charRace,charProfession,charLevel,charStrength,charDexterity,charConstitution,charIntelligence,charWisdom,charCharisma,
      useMagicDeviceBonus,
      survivalBonus,
      spellcraftBonus,
      senseMotiveBonus,
      professionBonus,
      perceptionBonus,
      knowledgeBonus,
      healBonus,
      flyBonus,
      disguiseBonus,
      diplomacyBonus,
      climbBonus,
      appraiseBonus,
      swimBonus,
      stealthBonus,
      sleightOfHandBonus,
      rideBonus,
      performBonus,
      linguisticsBonus,
      intimidateBonus,
      handleAnimalBonus,
      escapeArtistBonus,
      disableDeviceBonus,
      craftBonus,
      bluffBonus,
      acrobaticsBonus,
      currentGame,
      note,
      inventor){
        alert(note)
      return fetch(`${api.options.baseUrl}/charsheets`, {
        "credentials": "include",
        method: 'POST',
        headers: this.options.headers,
        body: JSON.stringify({
          name: charName,
          url: charUrl,
          race: charRace,
          profession: charProfession,
          level: charLevel,
          strength: charStrength,
          dexterity: charDexterity,
          constitution: charConstitution,
          intelligence: charIntelligence,
          wisdom: charWisdom,
          charisma: charCharisma,
          useMagicDeviceLevel: useMagicDeviceBonus,
          survivalLevel: survivalBonus,
          spellcraftLevel: spellcraftBonus,
          senseMotiveLevel: senseMotiveBonus,
          professionLevel: professionBonus,
          perceptionLevel: perceptionBonus,
          knowledgeLevel: knowledgeBonus,
          healLevel: healBonus,
          flyLevel: flyBonus,
          disguiseLevel: disguiseBonus,
          diplomacyLevel: diplomacyBonus,
          climbLevel: climbBonus,
          appraiseLevel: appraiseBonus,
          swimLevel: swimBonus,
          stealthLevel: stealthBonus,
          sleightOfHandLevel: sleightOfHandBonus,
          rideLevel: rideBonus,
          performLevel: performBonus,
          linguisticsLevel: linguisticsBonus,
          intimidateLevel: intimidateBonus,
          handleAnimalLevel: handleAnimalBonus,
          escapeArtistLevel: escapeArtistBonus,
          disableDeviceLevel: disableDeviceBonus,
          craftLevel: craftBonus,
          bluffLevel: bluffBonus,
          acrobaticsLevel: acrobaticsBonus,
          game: currentGame,
          notes:note,
          inventory: inventor
        })
      })
      .then(res => {if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
    }

    updateCardOnServer(charName,charUrl,charRace,charProfession,charLevel,charStrength,charDexterity,charConstitution,charIntelligence,charWisdom,charCharisma,
      useMagicDeviceBonus,
      survivalBonus,
      spellcraftBonus,
      senseMotiveBonus,
      professionBonus,
      perceptionBonus,
      knowledgeBonus,
      healBonus,
      flyBonus,
      disguiseBonus,
      diplomacyBonus,
      climbBonus,
      appraiseBonus,
      swimBonus,
      stealthBonus,
      sleightOfHandBonus,
      rideBonus,
      performBonus,
      linguisticsBonus,
      intimidateBonus,
      handleAnimalBonus,
      escapeArtistBonus,
      disableDeviceBonus,
      craftBonus,
      bluffBonus,
      acrobaticsBonus,
      currentGame,
      note,
      inventor,
      weigh,
      
      armourName1,
      shieldName1,
      armourBonus1,
      shieldBonus1,
      armourType1,
      shieldType1,
      armourPenalty1,
      shieldPenalty1,
      armourSpellFail1,
      shieldSpellFail1,
      sheetId){
     
      return fetch(`${api.options.baseUrl}/charsheets/${sheetId}`, {
        "credentials": "include",
        method: 'PATCH',
        headers: this.options.headers,
        body: JSON.stringify({
          name: charName,
          url: charUrl,
          race: charRace,
          profession: charProfession,
          level: charLevel,
          strength: charStrength,
          dexterity: charDexterity,
          constitution: charConstitution,
          intelligence: charIntelligence,
          wisdom: charWisdom,
          charisma: charCharisma,
          useMagicDeviceLevel: useMagicDeviceBonus,
          survivalLevel: survivalBonus,
          spellcraftLevel: spellcraftBonus,
          senseMotiveLevel: senseMotiveBonus,
          professionLevel: professionBonus,
          perceptionLevel: perceptionBonus,
          knowledgeLevel: knowledgeBonus,
          healLevel: healBonus,
          flyLevel: flyBonus,
          disguiseLevel: disguiseBonus,
          diplomacyLevel: diplomacyBonus,
          climbLevel: climbBonus,
          appraiseLevel: appraiseBonus,
          swimLevel: swimBonus,
          stealthLevel: stealthBonus,
          sleightOfHandLevel: sleightOfHandBonus,
          rideLevel: rideBonus,
          performLevel: performBonus,
          linguisticsLevel: linguisticsBonus,
          intimidateLevel: intimidateBonus,
          handleAnimalLevel: handleAnimalBonus,
          escapeArtistLevel: escapeArtistBonus,
          disableDeviceLevel: disableDeviceBonus,
          craftLevel: craftBonus,
          bluffLevel: bluffBonus,
          acrobaticsLevel: acrobaticsBonus,
          notes: note,
          inventory:inventor,
          weight: weigh,

          armourName:  armourName1,
          shieldName: shieldName1,
          armourBonus: armourBonus1,
          shieldBonus:shieldBonus1,
          armourType:armourType1,
          shieldType:shieldType1,
          armourPenalty:armourPenalty1,
          shieldPenalty:shieldPenalty1,
          armourSpellFail:armourSpellFail1,
          shieldSpellFail:shieldSpellFail1,

          game: currentGame
        })
      })
      .then(res => {if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
    }
  
    postLoginToServer(profileName,profileJob,profileEmail){
      return fetch(`${api.options.baseUrl}/users/me`, {
        method: 'PATCH',
        "credentials": "include",
        headers: this.options.headers,
        body: JSON.stringify({
          name: profileName,
          about: profileJob,
          email: profileEmail
        })
      })
      .then(res => {
        return this._check(res)
      })
    }
  
    deleteCardFromServer(sheetId){
      return fetch(`${api.options.baseUrl}/charsheets/${sheetId}`, {
        "credentials": "include",
        method: 'DELETE',
        headers: this.options.headers,
        body: JSON.stringify({})
      })
      .then(res => {
        return this._check(res)
      })
    }
  
    likeCardOnServer(cardId){
      return fetch(`${api.options.baseUrl}/charsheets/${cardId}/likes`, {
        "credentials": "include",
        method: 'PUT',
        headers: this.options.headers,
        body: JSON.stringify({})
      })
      .then(res => {
        return this._check(res)
      })  
    }
  
    dislikeCardOnServer(cardId){
      return fetch(`${api.options.baseUrl}/charsheets/${cardId}/likes`, {
        "credentials": "include",
        method: 'DELETE',
        headers: this.options.headers,
        body: JSON.stringify({})
      })
      .then(res => {
        return this._check(res)
      }); 
    }
  // фронт аватар
    postAvatarToServer(avatarLink){
      return fetch(`${api.options.baseUrl}/users/me/avatar`, {
        "credentials": "include",
        method: 'PATCH',
        headers: this.options.headers,
        body: JSON.stringify({
          avatar: avatarLink
        })
      })
      .then(res => {
        return this._check(res)
      }); 
    }
  }
  //api front
  const api = new Api({
    // baseUrl: 'http://51.250.6.187/api',
    baseUrl: 'http://localhost:3005/api',
    
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  }); 
  
  export {api};