import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography
} from '@mui/material';

const AddMemberDialog = ({
  open,
  onClose,
  newMember,
  onChange,
  onSubmit,
  groups,
  errorMessage,
  url,
  tittle
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{tittle} Add Member</DialogTitle>
      <DialogContent>
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <FormControl fullWidth margin="normal">
          <InputLabel>Group Name</InputLabel>
          <Select
            name="group"
            value={newMember.group}
            onChange={onChange}
            fullWidth
          >
            {groups.map((group) => (
              <MenuItem key={group.index} value={group.index}>
                {group.index}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Member Name"
          name="name"
          value={newMember.name}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Number of People"
          name="people"
          type="number"
          value={newMember.people}
          onChange={onChange}
          fullWidth
          margin="normal"
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Add Member
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMemberDialog;
