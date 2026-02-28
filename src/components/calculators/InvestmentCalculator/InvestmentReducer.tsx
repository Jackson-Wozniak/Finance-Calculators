
export interface InvestmentState{

}

export const initialInvestmentState = {

}

export type InvestmentAction =
    | { type: "SetYears", payload: number };

export const InvestmentReducer = (state: InvestmentState, action: InvestmentAction) => {
    switch(action.type){
        case "SetYears": return state;
        default: return state;
    }
}