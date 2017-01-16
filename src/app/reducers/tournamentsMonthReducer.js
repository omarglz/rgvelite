const tournamentsMonthReducer = (state = {
	janButton: "mdl-button mdl-js-button mdl-button--primary",
	febButton: "mdl-button mdl-js-button mdl-button--primary",
	marButton: "mdl-button mdl-js-button mdl-button--primary",
	aprButton: "mdl-button mdl-js-button mdl-button--primary",
	mayButton: "mdl-button mdl-js-button mdl-button--primary",
	juneButton: "mdl-button mdl-js-button mdl-button--primary",
	julyButton: "mdl-button mdl-js-button mdl-button--primary",
	augButton: "mdl-button mdl-js-button mdl-button--primary",
	sepButton: "mdl-button mdl-js-button mdl-button--primary",
	octButton: "mdl-button mdl-js-button mdl-button--primary",
	novButton: "mdl-button mdl-js-button mdl-button--primary",
	decButton: "mdl-button mdl-js-button mdl-button--primary",
	monthSelected: "none"	
}, action) => {
	switch (action.type) {
		case "CLICK_JAN_BUTTON":
			if (state.janButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 1
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;  
		case "CLICK_FEB_BUTTON":
			if (state.febButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
                    febButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 2
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_MAR_BUTTON":
			if (state.marButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 3
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_APR_BUTTON":
			if (state.aprButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 4
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_MAY_BUTTON":
			if (state.mayButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 5
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_JUNE_BUTTON":
			if (state.juneButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 6
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_JULY_BUTTON":
			if (state.julyButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 7
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_AUG_BUTTON":
			if (state.augButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 8
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_SEP_BUTTON":
			if (state.sepButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 9
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_OCT_BUTTON":
			if (state.octButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 10
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_NOV_BUTTON":
			if (state.novButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: 11
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_DEC_BUTTON":
			if (state.decButton === "mdl-button mdl-js-button mdl-button--primary") {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
					monthSelected: 12
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "mdl-button mdl-js-button mdl-button--primary",
					febButton: "mdl-button mdl-js-button mdl-button--primary",
					marButton: "mdl-button mdl-js-button mdl-button--primary",
					aprButton: "mdl-button mdl-js-button mdl-button--primary",
					mayButton: "mdl-button mdl-js-button mdl-button--primary",
					juneButton: "mdl-button mdl-js-button mdl-button--primary",
					julyButton: "mdl-button mdl-js-button mdl-button--primary",
					augButton: "mdl-button mdl-js-button mdl-button--primary",
					sepButton: "mdl-button mdl-js-button mdl-button--primary",
					octButton: "mdl-button mdl-js-button mdl-button--primary",
					novButton: "mdl-button mdl-js-button mdl-button--primary",
					decButton: "mdl-button mdl-js-button mdl-button--primary",
					monthSelected: "none"	
                };
            }
            break;   
	}
	return state;
};

export default tournamentsMonthReducer;
