import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    table: {
        minWidth: 650,

    },
});


export default function ShowTable() {
  const classes = useStyles();

  const [studentList, setStudentList] = useState([])

  console.log(studentList);

const deleteStudent =(id) => {

  console.log("The DeleteStudent Method Called -> " + id);

  axios.delete(`http://localhost:5000/students/${id}`).then( () => {
    window.location.reload(false);
  })

}

  useEffect(() => {
  axios.get('http://localhost:5000/students').then( (allStudents) => {
    setStudentList(allStudents.data);
  } )

  }, [])

  return (
    <>
    <h2>Therapists</h2>
    <TableContainer component={Paper}>
      <Table className ={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">License Number</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Speciality</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteStudent(student._id)} >
              <DeleteIcon fontSize="small" />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
