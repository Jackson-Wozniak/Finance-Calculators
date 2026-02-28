import { Box, Button } from "@mui/material";
import type { InvestmentAction, InvestmentState } from "./InvestmentReducer";

const InvestmentInputs: React.FC<{
    state: InvestmentState,
    dispatch: React.Dispatch<InvestmentAction>,
    handleSubmit: () => void
}> = ({state, dispatch, handleSubmit}) => {
    return (
        <Box width="100%" height="100%">
            <Button onClick={handleSubmit}>Button</Button>
        </Box>
    );
};

export default InvestmentInputs;