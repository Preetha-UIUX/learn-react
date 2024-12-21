import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material"

const TodoDetails = ({todoDetails, openDialog, setOpenDialog, setTodoDetails}) => {
  return (
    <div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
            <Button onClick={() => {
                setTodoDetails(null);
                setOpenDialog(false);
            }}>
                Close
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TodoDetails
