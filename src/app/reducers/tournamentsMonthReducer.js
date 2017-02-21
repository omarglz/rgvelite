const tournamentsMonthReducer = (state = {
	allButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
	janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
	monthSelected: "none"	
}, action) => {
	switch (action.type) {
		case "CLICK_ALL_BUTTON":
			if (state.allButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: "none"
                };
            }
            break;  
		case "CLICK_JAN_BUTTON":
			if (state.janButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 1
                };
            }
            break;  
		case "CLICK_FEB_BUTTON":
			if (state.febButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    febButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 2
                };
            }
            break;   
		case "CLICK_MAR_BUTTON":
			if (state.marButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 3
                };
            }
            break;   
		case "CLICK_APR_BUTTON":
			if (state.aprButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 4
                };
            }
            break;   
		case "CLICK_MAY_BUTTON":
			if (state.mayButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 5
                };
            }
            break;   
		case "CLICK_JUNE_BUTTON":
			if (state.juneButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 6
                };
            }
            break;   
		case "CLICK_JULY_BUTTON":
			if (state.julyButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 7
                };
            }
            break;   
		case "CLICK_AUG_BUTTON":
			if (state.augButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 8
                };
            }
            break;   
		case "CLICK_SEP_BUTTON":
			if (state.sepButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 9
                };
            }
            break;   
		case "CLICK_OCT_BUTTON":
			if (state.octButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 10
                };
            }
            break;   
		case "CLICK_NOV_BUTTON":
			if (state.novButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					monthSelected: 11
                };
            }
            break;   
		case "CLICK_DEC_BUTTON":
			if (state.decButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
                    allButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
                    janButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					febButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					marButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					aprButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					mayButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					juneButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					julyButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					augButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					sepButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					octButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					novButton: "mdl-button mdl-js-button mdl-button--accent-custom2",
					decButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--accent-custom2",
					monthSelected: 12
                };
            }
            break;   
	}
	return state;
};

export default tournamentsMonthReducer;
