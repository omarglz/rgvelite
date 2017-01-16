const tournamentsLevelReducer = (state = {
    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
    levelSelected: "none"
}, action) => {
    switch (action.type) {
        case "T_CLICK_CHALLENGER1DAY_BUTTON":
            if (state.challenger1DayBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "Challenger 1-Day"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "none"
                };
            }
            break;
        case "T_CLICK_CHALLENGER2DAY_BUTTON":
            if (state.challenger2DayBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "Challenger 2-Day"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "none"
                };
            }
            break;
        case "T_CLICK_CHAMPS_BUTTON":
            if (state.champsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "Champs"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "none"
                };
            }
            break;
        case "T_CLICK_SUPER_CHAMPS_BUTTON":
            if (state.superChampsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "Super Champs"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "none"
                };
            }
            break;
        case "T_CLICK_OPEN_BUTTON":
            if (state.openBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
                    levelSelected: "Open"
                };
            }
            else {
                state = {
                    ...state,
                    challenger1DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    challenger2DayBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "none"
                };
            }
            break;
    }
    return state;
};

export default tournamentsLevelReducer; 
