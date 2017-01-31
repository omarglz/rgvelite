const tournamentsMonthReducer = (state = {
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
		case "CLICK_JAN_BUTTON":
			if (state.janButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_FEB_BUTTON":
			if (state.febButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_MAR_BUTTON":
			if (state.marButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_APR_BUTTON":
			if (state.aprButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_MAY_BUTTON":
			if (state.mayButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_JUNE_BUTTON":
			if (state.juneButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_JULY_BUTTON":
			if (state.julyButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_AUG_BUTTON":
			if (state.augButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_SEP_BUTTON":
			if (state.sepButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_OCT_BUTTON":
			if (state.octButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_NOV_BUTTON":
			if (state.novButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
		case "CLICK_DEC_BUTTON":
			if (state.decButton === "mdl-button mdl-js-button mdl-button--accent-custom2") {
                state = {
                    ...state,
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
            else {
                state = {
                    ...state,
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
	}
	return state;
};

export default tournamentsMonthReducer;
