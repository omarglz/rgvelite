const initialState = {
    challengerBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent",
    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
    levelSelected: "Challenger"
}

const rankingsLevelReducer = (state = initialState, action) => {
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
            break;
    }
    return state;
};

export default rankingsLevelReducer; 
