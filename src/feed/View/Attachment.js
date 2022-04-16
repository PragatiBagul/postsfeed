import { Box, Button } from "@mui/material";
import AttachmentIcon from '@mui/icons-material/Attachment';

const Attachment = () => {
    return ( <Box sx={{ p: 2, border: '1px black' }}>
        <Button variant="outlined" color="info"><AttachmentIcon color="error"/>&nbsp; Attachment.pdf</Button>
  </Box> );
}
 
export default Attachment;