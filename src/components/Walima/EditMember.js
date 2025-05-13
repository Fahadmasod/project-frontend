import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button
} from '@mui/material';
import { base_url } from '../../envirment';


const EditMember = ({ open, onClose, member, setMember ,data,setData,url }) => {

  
    
   
      const [editMember, setEditMember] = useState({
        _id: '',
        groupId: '',
        name: '',
        people: 1,
      });
      const [searchTerm, setSearchTerm] = useState('');
    
 const handleUpdateMember = () => {
    debugger
    const { groupId, _id, name, people } = member;
    fetch(`${base_url}/${url}/groups/${groupId}/member/${_id}/edit`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, people }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setData(prevData => {
          const updatedGroups = prevData[0].groups.map(group => {
            if (group._id === groupId) {
              const updatedMembers = group.members.map(m =>
                m._id === _id ? { ...m, name, people } : m
              );
              const newSum = updatedMembers.reduce((acc, m) => acc + m.people, 0);
              return { ...group, members: updatedMembers, sum: newSum };
            }
            return group;
          });
          return [{ ...prevData[0], groups: updatedGroups }];
        });
        onClose(false);
      });
  };


   
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Member</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Name"
          value={member.name}
          onChange={(e) => setMember({ ...member, name: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="People"
          type="number"
          value={member.people}
          onChange={(e) => setMember({ ...member, people: Number(e.target.value) })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleUpdateMember}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditMember;
