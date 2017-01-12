const rankingsLevelReducer = (state = {
    challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
    levelSelected: "none"
}, action) => {
    switch (action.type) {
        case "R_CLICK_CHALLENGER_BUTTON":
            if (state.challengerBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
                state = {
                    ...state,
                    challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "Challenger"
                };
            }
            else {
                state = {
                    ...state,
                    challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "none"
                };
            }
            break;
        case "R_CLICK_CHAMPS_BUTTON":
            if (state.champsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
                state = {
                    ...state,
                    challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "Champs"
                };
            }
            else {
                state = {
                    ...state,
                    challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "none"
                };
            }
            break;
        case "R_CLICK_SUPER_CHAMPS_BUTTON":
            if (state.superChampsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
                state = {
                    ...state,
                    challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
                    levelSelected: "Super Champs"
                };
            }
            else {
                state = {
                    ...state,
                    challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
                    champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
                    levelSelected: "none"
                };
            }
            break;
    }
    return state;
};

export default rankingsLevelReducer; 
