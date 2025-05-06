import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Checkbox, Button,
  Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControl,
  InputLabel, Select, MenuItem, CircularProgress, IconButton
} from '@mui/material';
import { base_url } from '../envirment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const WalimaTable = () => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newMember, setNewMember] = useState({ group: '', name: '', people: 1 });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editMember, setEditMember] = useState({
    _id: '',
    groupId: '',
    name: '',
    people: 1,
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(`${base_url}/api/saveddatas`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setErrorMessage(err.message);
        setLoading(false);
      }
    };
    fetchGroups();
  }, []);

  const handleChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMember = () => {
    const peopleCount = parseInt(newMember.people, 10);
    if (newMember.group && newMember.name && !isNaN(peopleCount)) {
      fetch(`${base_url}/api/groups/${newMember.group}/member`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newMember.name,
          people: peopleCount,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setData((prevData) => {
            const updatedGroups = prevData[0].groups.map((group) => {
              if (group.index === newMember.group) {
                group.members.push(data);
                group.sum += peopleCount;
              }
              return group;
            });
            return [{ ...prevData[0], groups: updatedGroups }];
          });
          setOpenDialog(false);
          setNewMember({ group: '', name: '', people: 1 });
        })
        .catch(() => {
          setErrorMessage('Error adding member. Please try again.');
        });
    } else {
      setErrorMessage('Invalid input. Please make sure all fields are correctly filled.');
    }
  };

  const toggleCheckbox = (groupIdx, memberIdx) => {
    const group = data[0].groups[groupIdx];
    const member = group.members[memberIdx];
    const updatedMember = { ...member, isChecked: !member.isChecked };

    setData((prevData) => {
      const newData = [...prevData];
      newData[0].groups[groupIdx].members[memberIdx] = updatedMember;
      return newData;
    });

    fetch(`${base_url}/api/groups/${group._id}/member/${member._id}`, {
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((updatedMember) => {
        setData((prevData) => {
          const newData = [...prevData];
          newData[0].groups[groupIdx].members[memberIdx] = updatedMember;
          return newData;
        });
      })
      .catch((error) => {
        console.error('Error updating member status:', error.message);
      });
  };

  const handleDeleteMember = async (groupId, memberId, groupIdx, memberIdx) => {
    try {
      const response = await fetch(`${base_url}/api/groups/${groupId}/member/${memberId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete member');
      }

      const deleted = await response.json();

      setData(prevData => {
        const newData = [...prevData];
        const group = newData[0].groups[groupIdx];
        group.sum -= deleted.member.people;
        group.members.splice(memberIdx, 1);
        return newData;
      });
    } catch (err) {
      console.error('Delete error:', err.message);
      setErrorMessage(err.message || 'Error deleting member');
    }
  };

  const handleUpdateMember = () => {
    const { groupId, _id, name, people } = editMember;
    fetch(`${base_url}/api/groups/${groupId}/member/${_id}/edit`, {
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
        setEditDialogOpen(false);
      });
  };

  const openEditDialog = (groupId, member) => {
    setEditMember({
      _id: member._id,
      groupId: groupId,
      name: member.name,
      people: member.people,
    });
    setEditDialogOpen(true);
  };

  return (
    <div>
      <Typography variant="h5" align="center" sx={{ mb: 3 }}>
        Walima Invitation List
        {data.length > 0 && data[0].groups
          ? ` (Total: ${data[0].groups.reduce((acc, group) => acc + group.sum, 0)})`
          : ''}
      </Typography>

      <TextField
        label="Search Member Global"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        sx={{ mb: 3 }}
      />

      <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)} sx={{ mb: 2 }}>
        Add Member
      </Button>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <CircularProgress size={48} color="primary" />
        </div>
      ) : (
        data.length > 0 && data[0].groups && data[0].groups.map((group, groupIdx) => {
          const filteredMembers = group.members.filter(member =>
            member.name.toLowerCase().includes(searchTerm)
          );

          if (filteredMembers.length === 0) return null;

          return (
            <Paper
              key={groupIdx}
              elevation={3}
              sx={{
                p: 2,
                mb: 4,
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: "#f5f5f5"
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
                Group {group.index} — <span style={{ color: '#1976d2' }}>Total: {group.sum}</span>
              </Typography>

              <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                <Table size="small" sx={{ minWidth: 100 }}>
                  <TableHead sx={{ backgroundColor: '#1976d2' }}>
                    <TableRow>
                      <TableCell align="left" sx={{ color: '#fff' }}><strong>Name</strong></TableCell>
                      <TableCell align="left" sx={{ color: '#fff' }}><strong>People</strong></TableCell>
                      <TableCell align="left" sx={{ color: '#fff' }}><strong>Card Submit</strong></TableCell>
                      <TableCell align="left" sx={{ color: '#fff' }}><strong>Delete & Edit</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredMembers.map((member, memberIdx) => (
                      <TableRow
                        key={memberIdx}
                        sx={{
                          backgroundColor: memberIdx % 2 === 0 ? '#fafafa' : '#fff',
                          '&:hover': {
                            backgroundColor: '#e3f2fd'
                          }
                        }}
                      >
                        <TableCell>{member.name}</TableCell>
                        <TableCell align="left">{member.people}</TableCell>
                        <TableCell align="left">
                          <Checkbox
                            checked={member.isChecked}
                            onChange={() => toggleCheckbox(groupIdx, group.members.indexOf(member))}
                            color="primary"
                          />
                        </TableCell>
                        <TableCell align="left">
                          <IconButton
                            onClick={() => handleDeleteMember(group._id, member._id, groupIdx, group.members.indexOf(member))}
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => openEditDialog(group._id, member)}
                            color="primary"
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          );
        })
      )}

      {/* Add Member Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add Member</DialogTitle>
        <DialogContent>
          {errorMessage && <Typography color="error">{errorMessage}</Typography>}
          <FormControl fullWidth margin="normal">
            <InputLabel>Group Name</InputLabel>
            <Select
              name="group"
              value={newMember.group}
              onChange={handleChange}
              fullWidth
            >
              {data[0]?.groups.map((group) => (
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
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Number of People"
            name="people"
            type="number"
            value={newMember.people}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddMember} color="primary">
            Add Member
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Member Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Member</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            value={editMember.name}
            onChange={(e) => setEditMember({ ...editMember, name: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="People"
            type="number"
            value={editMember.people}
            onChange={(e) => setEditMember({ ...editMember, people: Number(e.target.value) })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdateMember}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WalimaTable;
