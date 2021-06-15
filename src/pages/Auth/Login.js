import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Typography, Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';
import { LoginButton } from '../../ReachUIComponents/Button.style';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundImage: `url(${'https://image.freepik.com/free-photo/blue-color-splash-dark-background-with-copy-space-text_23-2148054328.jpg'})`,
		backgroundSize: 'cover',
		minHeight: '99.7vh',
		// minHeight: 656,
		width: '100%',
		paddingTop: '1px',
		display: 'flex'
	},
	paper: {
		marginTop: '128px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: 280,
		margin: '100px auto',
		padding: 20
	},
	heading: {
		fontWeight: 'bold'
	},
	label: {
		fontWeight: 'bold',
		marginTop: theme.spacing(2)
	},
	textField: {
		marginTop: theme.spacing(3),
		marginRight: 'auto'
    },
    button: {
        width:'318px'
    }
}));

function Login() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid className={classes.root}>
				<Paper elevation={10} className={classes.paper}>
					<Grid align="center">
						<img
							src="https://icons.iconarchive.com/icons/artdesigner/tweet-my-web/256/single-bird-icon.png"
							height="75"
							alt="logo"
							className={classes.logo}
						/>
						<Typography variant="h6" align="center" className={classes.heading}>
							Welcome back!
						</Typography>
					</Grid>
					<br />
					<Grid container spacing={1} alignItems="flex-end">
						<Grid item>
							<PersonIcon style={{ color: '#F04763' }} />
						</Grid>
						<Grid item style={{ width: 250 }}>
							<TextField
								type="userName"
								id="input-with-icon-grid"
								label="Username"
								fullWidth
								name="password"
							/>
						</Grid>
					</Grid>
					<br />
					<Grid container spacing={1} alignItems="flex-end">
						<Grid item>
							<LockIcon style={{ color: '#F04763' }} />
						</Grid>
						<Grid item style={{ width: 250 }}>
							<TextField
								type="password"
								id="input-with-icon-grid"
								label="Password"
								fullWidth
								name="password"
							/>
						</Grid>
					</Grid>
					<FormControlLabel
						className={classes.textField}
						control={<Checkbox name="checkedB" color="primary" />}
						label="Remember me"
					/>
					
					<Link
						to={{
							pathname: '/dashboard'
						}}
					>
						<LoginButton>LOGIN</LoginButton>
					</Link>
				</Paper>
			</Grid>
		</div>
	);
}

export default Login;
