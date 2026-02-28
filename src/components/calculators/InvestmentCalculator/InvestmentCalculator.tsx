import Box from "@mui/material/Box";
import LineChart from "./LineChart";
import InvestmentInputs from "./InvestmentInputs";

const InvestmentCalculator: React.FC<{

}> = ({}) => {
    document.title = "Investment Calculator";

    return (
        <Box width="100%" height="100%" display="flex">
            <InvestmentInputs />
            <LineChart labels={["year 1", "year2", "year3"]} values={[0, 1, 2]}/>
        </Box>
    );
};

export default InvestmentCalculator;