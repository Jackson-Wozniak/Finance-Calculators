import Box from "@mui/material/Box";
import LineChart from "./LineChart";
import InvestmentInputs from "./InvestmentInputs";
import { useReducer, useState } from "react";
import { initialInvestmentState, InvestmentReducer } from "./InvestmentReducer";

const InvestmentCalculator = () => {
    document.title = "Investment Calculator";

    const [investmentState, InvestmentDispatch] = useReducer(InvestmentReducer, initialInvestmentState);
    const [labels, setLabels] = useState<string[]>([]);
    const [values, setValues] = useState<number[]>([]);

    function handleSubmit(){
        setLabels(["Start", "1", "2", "3"]);
        setValues([1.0, 100.0, 120.0, 300.0]);
    }

    return (
        <Box width="100%" height="100%" display="flex">
            <Box width="35%" height="100%" bgcolor="whitesmoke">
                <InvestmentInputs state={investmentState} dispatch={InvestmentDispatch} handleSubmit={handleSubmit}/>
            </Box>
            <Box width="65%" height="100%">
                <LineChart labels={labels} values={values}/>
            </Box>
        </Box>
    );
};

export default InvestmentCalculator;