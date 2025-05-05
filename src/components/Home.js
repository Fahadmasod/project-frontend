import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Checkbox } from '@mui/material';
import { base_url } from '../envirment';

const WalimaTable = () => {
  const [data, setData] = useState([

  ]);
  const [selected, setSelected] = useState({});
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  // Fetch the saved data from the backend when the component mounts
  useEffect(() => {
    const fetchGroups = async () => {
      
      try {
        const response = await fetch(`${base_url}/api/saveddatas`);

        // Check if response is OK (status code 200-299)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setData(data);  // Set the groups to state
        console.log("data", data)
        setLoading(false);  // Stop loading
      } catch (err) {
        setError(err.message);  // Set the error message
        setLoading(false);  // Stop loading in case of error
      }
    };

    fetchGroups();
  }, []);

  // Handle checkbox toggle and send data to backend
  const toggleCheckbox = (groupIdx, memberIdx) => {
    debugger
    const group = data[0].groups[groupIdx];
    const member = group.members[memberIdx];

    // Toggle the local isChecked state
    const updatedMember = {
      ...member,
      isChecked: !member.isChecked,
    };

    // Optimistically update the local state
    setData(prevData => {
      const newData = [...prevData];
      newData[0].groups[groupIdx].members[memberIdx] = updatedMember;
      return newData;
    });

    // Send the updated status to the backend
    fetch(`${base_url}/api/groups/${group._id}/member/${member._id}`, {
      method: 'PUT',
    })
      .then(async response => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }
        return response.json();
      })
      .then(updatedMember => {
        // Optionally, you can update the member again if necessary
        setData(prevData => {
          const newData = [...prevData];
          newData[0].groups[groupIdx].members[memberIdx] = updatedMember;
          return newData;
        });
      })
      .catch(error => {
        console.error("Error updating member status:", error.message);
      });
  };








  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: 'auto', mt: 4, p: 2 }}>
      <Typography variant="h5" align="center" sx={{ mb: 3 }}>
        Walima Invitation List
        {data.length > 0 && data[0].groups
          ? ` (Total: ${data[0].groups.reduce((acc, group) => acc + group.sum, 0)})`
          : ''}
      </Typography>


      {/* Render Groups and Members */}
      {data.length > 0 && data[0].groups && (
        data[0].groups.map((group, groupIdx) => (
          <Paper key={groupIdx} sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ pl: 2, mt: 1 }}>
              {group.index} (Total: {group.sum})
            </Typography>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>#</strong></TableCell>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell align="right"><strong>People</strong></TableCell>
                  <TableCell align="center"><strong>Card Submit</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {group.members.map((member, memberIdx) => (
                  <TableRow key={memberIdx}>
                    <TableCell>{memberIdx + 1}</TableCell>
                    <TableCell>{member.name}</TableCell>
                    <TableCell align="right">{member.people}</TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={member.isChecked}
                        onChange={() => toggleCheckbox(groupIdx, memberIdx)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        ))
      )}
    </TableContainer>
  );

};

export default WalimaTable;
