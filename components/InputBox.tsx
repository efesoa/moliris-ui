import {Box, TextField, Typography} from "@mui/material";

export default function InputBox(props: { name: string; sepal_l: string; sepal_w: string; petal_l: string; petal_w: string; bx: number; data: any; handleChange: any; }) {
    const {name, sepal_l, sepal_w, petal_l, petal_w, bx, data, handleChange} = props;
    const Boxes = () => {
        if (bx == 1) {
            return(
                <Box boxShadow={7} sx={{ p:2 }} borderRadius={5}>
                    <Typography variant="h5" align='center'>
                        {name}
                    </Typography>
                    <p>
                        <label>{sepal_l}</label><br/>
                        <TextField type='number' name='sepal_length' value={data.sepal_length} size='small'
                                   sx={{ width: '50%' }} onChange={handleChange}
                                   inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }} />
                    </p>
                    <p>
                        <label>{sepal_w}</label><br/>
                        <TextField type='number' name='sepal_width' value={data.sepal_width} size='small'
                                   sx={{ width: '50%' }} onChange={handleChange}
                                   inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                    </p>
                    <p>
                        <label>{petal_l}</label><br/>
                        <TextField type='number' name='petal_length' value={data.petal_length} size='small'
                                   sx={{ width: '50%' }} onChange={handleChange}
                                   inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                    </p>
                    <p>
                        <label>{petal_w}</label><br/>
                        <TextField type='number' name='petal_width' value={data.petal_width} size='small'
                                   sx={{ width: '50%' }} onChange={handleChange}
                                   inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                    </p>
                </Box>
            )}
        if (bx == 2) {
            return(
                <Box boxShadow={7} sx={{ p:2 }} borderRadius={5}>
                    <Typography variant="h5" align='center'>
                        {name}
                    </Typography>
                    <p>
                        <label>{sepal_l}</label><br/>
                        <TextField type='number' name='sec_sepal_length' value={data.sec_sepal_length} size='small'
                                   sx={{ width: '50%' }} onChange={handleChange}
                                   inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }} />
                    </p>
                    <p>
                        <label>{sepal_w}</label><br/>
                        <TextField type='number' name='sec_sepal_width' value={data.sec_sepal_width} size='small'
                                   sx={{ width: '50%' }} onChange={handleChange}
                                   inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                    </p>
                    <p>
                        <label>{petal_l}</label><br/>
                        <TextField type='number' name='sec_petal_length' value={data.sec_petal_length} size='small'
                                   sx={{ width: '50%' }} onChange={handleChange}
                                   inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                    </p>
                    <p>
                        <label>{petal_w}</label><br/>
                        <TextField type='number' name='sec_petal_width' value={data.sec_petal_width} size='small'
                                   sx={{ width: '50%' }} onChange={handleChange}
                                   inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                    </p>
                </Box>
            )}
        return (<></>)
    }
    return (
        <Boxes />
    )
}