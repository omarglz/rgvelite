const tournamentsMonthReducer = (state = {
	janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	monthSelected: "none"	
}, action) => {
	switch (action.type) {
		case "CLICK_JAN_BUTTON":
			if (state.janButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 1
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;  
		case "CLICK_FEB_BUTTON":
			if (state.febButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
                    febButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 2
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_MAR_BUTTON":
			if (state.marButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 3
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_APR_BUTTON":
			if (state.aprButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 4
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_MAY_BUTTON":
			if (state.mayButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 5
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_JUNE_BUTTON":
			if (state.juneButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 6
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_JULY_BUTTON":
			if (state.julyButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 7
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_AUG_BUTTON":
			if (state.augButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 8
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_SEP_BUTTON":
			if (state.sepButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 9
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_OCT_BUTTON":
			if (state.octButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 10
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_NOV_BUTTON":
			if (state.novButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: 11
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
		case "CLICK_DEC_BUTTON":
			if (state.decButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
					monthSelected: 12
                };
            }
            else {
                state = {
                    ...state,
                    janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
					monthSelected: "none"	
                };
            }
            break;   
	}
	return state;
};

export default tournamentsMonthReducer;
