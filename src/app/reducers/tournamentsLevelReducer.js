const tournamentsLevelReducer = (state = {
    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom",
    champsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
    openBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
    levelSelected: "Challenger 2-Day"
}, action) => {
    switch (action.type) {
        case "T_CLICK_CHALLENGER1DAY_BUTTON":
            if (state.challenger1DayBtn === "mdl-button mdl-js-button mdl-button--accent-custom") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent-custom", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    levelSelected: "Challenger 1-Day"
                };
            }
            break;
        case "T_CLICK_CHALLENGER2DAY_BUTTON":
            if (state.challenger2DayBtn === "mdl-button mdl-js-button mdl-button--accent-custom") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent-custom", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom", 
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    levelSelected: "Challenger 2-Day"
                };
            }
            break;
        case "T_CLICK_CHAMPS_BUTTON":
            if (state.champsBtn === "mdl-button mdl-js-button mdl-button--accent-custom") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent-custom", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    champsBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    levelSelected: "Champs"
                };
            }
            break;
        case "T_CLICK_SUPER_CHAMPS_BUTTON":
            if (state.superChampsBtn === "mdl-button mdl-js-button mdl-button--accent-custom") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent-custom", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom",
                    openBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    levelSelected: "Super Champs"
                };
            }
            break;
        case "T_CLICK_OPEN_BUTTON":
            if (state.openBtn === "mdl-button mdl-js-button mdl-button--accent-custom") {
                state = {
                    ...state,
                    challenger1DayBtn: "mdl-button mdl-js-button mdl-button--accent-custom", 
                    challenger2DayBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    champsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    superChampsBtn: "mdl-button mdl-js-button mdl-button--accent-custom",
                    openBtn: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom",
                    levelSelected: "Open"
                };
            }
            break;
    }
    return state;
};

export default tournamentsLevelReducer; 