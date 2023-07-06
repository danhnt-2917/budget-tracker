import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';


function App() {
  const [income, setIncome] = useState(0)
  const [total, setTotal] = useState(0)
  const [expense, setExpense] = useState(0)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      <table>
        <tr>
          <th>Income: {income}</th>
          <th>Total: {total}</th>
          <th>Expense: {expense}</th>
        </tr>
      </table>
      <div>
        <Button onClick={handleOpen}>Add new transaction</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <useFormControl sx={{ width: '25ch' }}>
              <OutlinedInput placeholder="Enter money:" />
              <DatePicker label="Basic date picker" />
            </useFormControl>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
