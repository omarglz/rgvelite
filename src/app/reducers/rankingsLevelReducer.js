const rankingsLevelReducer = (state = {
    challengerBtn: "mdl-button mdl-js-button mdl-button--accent",
    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
    levelSelected: "none"
}, action) => {
    switch (action.type) {
        case "R_CLICK_CHALLENGER_BUTTON":
            if (state.challengerBtn === "mdl-button mdl-js-button mdl-button--accent") {
                state = {
                    ...state,
                    challengerBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "Challenger"
                };
            }
            else {
                state = {
                    ...state,
                    challengerBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "none"
                };
            }
            break;
        case "R_CLICK_CHAMPS_BUTTON":
            if (state.champsBtn === "mdl-button mdl-js-button mdl-button--accent") {
                state = {
                    ...state,
                    challengerBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "Champs"
                };
            }
            else {
                state = {
                    ...state,
                    challengerBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "none"
                };
            }
            break;
        case "R_CLICK_SUPER_CHAMPS_BUTTON":
            if (state.superChampsBtn === "mdl-button mdl-js-button mdl-button--accent") {
                state = {
                    ...state,
                    challengerBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent",
                    levelSelected: "Super Champs"
                };
            }
            else {
                state = {
                    ...state,
                    challengerBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "none"
                };
            }
            break;
    }
    return state;
};

export default rankingsLevelReducer; 
