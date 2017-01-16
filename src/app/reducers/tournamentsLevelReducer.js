const tournamentsLevelReducer = (state = {
    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent",
    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent",
    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
    openBtn: "mdl-button mdl-js-button mdl-button--accent",
    levelSelected: "none"
}, action) => {
    switch (action.type) {
        case "T_CLICK_CHALLENGER1DAY_BUTTON":
            if (state.challenger1DayBtn === "mdl-button mdl-js-button mdl-button--accent") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "Challenger 1-Day"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "none"
                };
            }
            break;
        case "T_CLICK_CHALLENGER2DAY_BUTTON":
            if (state.challenger2DayBtn === "mdl-button mdl-js-button mdl-button--accent") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "Challenger 2-Day"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "none"
                };
            }
            break;
        case "T_CLICK_CHAMPS_BUTTON":
            if (state.champsBtn === "mdl-button mdl-js-button mdl-button--accent") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent",
                    champsBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "Champs"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent",
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "none"
                };
            }
            break;
        case "T_CLICK_SUPER_CHAMPS_BUTTON":
            if (state.superChampsBtn === "mdl-button mdl-js-button mdl-button--accent") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent",
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "Super Champs"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent",
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "none"
                };
            }
            break;
        case "T_CLICK_OPEN_BUTTON":
            if (state.openBtn === "mdl-button mdl-js-button mdl-button--accent") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent",
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent",
                    levelSelected: "Open"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent",
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent",
                    levelSelected: "none"
                };
            }
            break;
    }
    return state;
};

export default tournamentsLevelReducer; 