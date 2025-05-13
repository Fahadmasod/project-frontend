import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Checkbox, Button,
  Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControl,
  InputLabel, Select, MenuItem, CircularProgress, IconButton

} from '@mui/material';
import { base_url } from '../../envirment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditMember from '../Walima/EditMember';
import AddMemberDialog from '../Walima/AddMemberDialog';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const WalimaTable = () => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newMember, setNewMember] = useState({ group: '', name: '', people: 1 });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState({});
  


  const [editMember, setEditMember] = useState({
    _id: '',
    groupId: '',
    name: '',
    people: 1,
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    debugger
    setLoading(true);
    try {
      const response = await fetch(`${base_url}/api/saveddatas`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setData(data);
      console.log(data[0].total_sum)
      setLoading(false);
    } catch (err) {
      setErrorMessage(err.message);
      setLoading(false);
    }
  };


  const handleChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMember = () => {
    setLoading(true);
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
          setLoading(false);
          fetchGroups()
        })
        .catch(() => {
          setErrorMessage('Error adding member. Please try again.');
          setLoading(false);
        });
    } else {
      setErrorMessage('Invalid input. Please make sure all fields are correctly filled.');
      setLoading(false);
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
      setLoading(true);
  
      const response = await fetch(`${base_url}/api/groups/${groupId}/member/${memberId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        setLoading(false);
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
      setLoading(false);
  
    } catch (err) {
      console.error('Delete error:', err.message);
      setErrorMessage(err.message || 'Error deleting member');
      setLoading(false);
    } finally {
     
      setLoading(false);
    }
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


  const toggleGroupCollapse = (groupIndex) => {
    setCollapsedGroups(prev => ({
      ...prev,
      [groupIndex]: !prev[groupIndex],
    }));
  };
  
  return (
    <div>
      <Typography variant="h5" align="center" sx={{ mb: 3 }}>
        Walima Invitation List  {data.length > 0 ?   data[0].total_sum:""}

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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
    Group {group.index} — <span style={{ color: '#1976d2' }}>Total: {group.sum}</span>
  </Typography>
  <IconButton onClick={() => toggleGroupCollapse(group.index)}>
    {collapsedGroups[group.index] ? <ExpandMoreIcon /> : <ExpandLessIcon />}
  </IconButton>
</div>
{!collapsedGroups[group.index] && (
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
              )}
            </Paper>
          );
        })
      )}

      {/* Add Member Dialog */}
    
      <AddMemberDialog
      tittle={'Walima'}
  open={openDialog}
  onClose={() => setOpenDialog(false)}
  newMember={newMember}
  onChange={handleChange}
  onSubmit={handleAddMember}
  groups={data[0]?.groups || []}
  errorMessage={errorMessage}
/>

      {/* Edit Member Dialog */}
   
      <EditMember
        tittle={"Walima"}
      url={'api'}
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        member={editMember}
        setMember={setEditMember}
      
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default WalimaTable;
