import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DrawerLeft from '../../Components/DrawerLeft';

const useStyles = makeStyles({
	root: {
		minWidth: 500
	},
});

function Dashboard() {
	 const classes = useStyles();

    return <div className={classes.root}>
        <DrawerLeft/>
    </div>;
}
export default Dashboard;
