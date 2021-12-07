    let onCrewResponse = function(response) {
        let crewData = response.data;
        let the1stCosmounaut = crewData[0];
    };
    
    let onCapsuleResponse = function(response) {
        let capsuleData = response.data;
        let the1stCapsule = capsuleData[0];
    };
    axios.get('https://api.spacexdata.com/v4/crew').then(onCrewResponse);
    axios.get('https://api.spacexdata.com/v4/capsules').then(onCapsuleResponse);