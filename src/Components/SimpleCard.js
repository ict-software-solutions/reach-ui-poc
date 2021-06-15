import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { ViewButton } from '../ReachUIComponents/Button.style';
import { Link } from 'react-router-dom';
import { Label, PasswordLabel } from '../ReachUIComponents/label.style';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: '42px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	paperContainer: {
		padding: theme.spacing(2),
		height: '250px',
		textAlign: 'center',
		backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Gyt74jB-7wzQd-9yZKyF0UI2G9voSefG26bvati6Or9R2xs4iBKBY9RE8LRLXyO2et0&usqp=CAU'})`
	},
	paperContainer1: {
		padding: theme.spacing(2),
		height: '250px',
		textAlign: 'center',
		backgroundImage: `url(${'https://thumbs.dreamstime.com/b/silver-jewelry-black-background-ring-crystals-transparent-crystals-lengthened-form-rosette-flower-ring-68059180.jpg'})`
	},
	paperContainer2: {
		padding: theme.spacing(2),
		height: '250px',
		textAlign: 'center',
		backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsULmIYlg5C5pc_cKcAZqUI3mBVbBV-Ez0aifx0T6Js6nQ7yIL19euOh3Vl4fF_2E1qQ&usqp=CAU'})`
	},
	paperContainer3: {
		padding: theme.spacing(2),
		height: '250px',
		textAlign: 'center',
		backgroundImage: `url(${'https://romanovrussia.com/wp-content/uploads/unique_engagement_rings.jpg'})`
	},
	paperContainer4: {
		padding: theme.spacing(2),
		height: '250px',
		textAlign: 'center',
		backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Hfoif3tlEPtdLuWY9NA-yPQEw0aNCitk9aoIP5Q86dkUFleWx8PUV_Ge9nM-FXffPzo&usqp=CAU'})`
	},
	container: {
		padding: theme.spacing(2),
		height: '218px',
		textAlign: 'center',
		backgroundImage: `url(${'https://t3.ftcdn.net/jpg/01/28/74/04/240_F_128740409_ngRpp8dnKYjqDVP1YL46FgXd2Y3lbqgE.jpg'})`
	},
	typo: {
		color: 'white',
		fontWeight: '900',
		marginTop: '34px',
		fontSize: '28px'
	}
}));

const welcome = 'A Golden chance to enjoy rate benefits!';

export default function SimpleCard() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paperContainer4}>
						<Grid item xs={4} style={{ marginLeft: '650px' }}>
							<Tooltip title="Reach UI">
								<Label>{welcome}</Label>
							</Tooltip>
							<br />
							<Tooltip title="Reach UI">
								<PasswordLabel>
									To know more
									<Link
										to={{
											pathname: '/dashboard/Details'
										}}
									>
										<ViewButton style={{ backgroundColor: 'darkblue' }}>CLICK HERE</ViewButton>
									</Link>
								</PasswordLabel>
							</Tooltip>
						</Grid>
						<Grid item xs={4} style={{ marginTop: '-179px' }}>
							<Paper className={classes.container} />
						</Grid>
					</Paper>
				</Grid>
				<br />
				<Tooltip title="Material UI">
					<Grid item xs={12}>
						<br />
						<Typography style={{ wordSpacing: '25px', letterSpacing: '10px' }}>
							OUR COLLECTIONS ARE UNIQUE,
						</Typography>
						<Typography style={{ wordSpacing: '25px', letterSpacing: '10px' }}>
							PRECIOUS AND NATURE.
						</Typography>
						<Typography style={{ wordSpacing: '25px', letterSpacing: '10px' }}>
							BIG GIRLS NEED BIG DIAMONDS.
						</Typography>
						<br />
						<Typography style={{ wordSpacing: '25px', letterSpacing: '10px' }}>
							-Elizabeth Taylor
						</Typography>
					</Grid>
				</Tooltip>
				<br />
				<br />
				<Grid item xs={3}>
					<Paper className={classes.paperContainer}>
						<Typography className={classes.typo}>GOLD JEWELS</Typography>
						<Tooltip title="Reach UI">
							<ViewButton style={{ backgroundColor: '#f9449f' }}> BUY NOW</ViewButton>
						</Tooltip>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paperContainer1}>
						<Typography className={classes.typo}>SILVER JEWELS</Typography>
						<Tooltip title="Reach UI">
							<ViewButton style={{ backgroundColor: '#f9449f' }}> BUY NOW</ViewButton>
						</Tooltip>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paperContainer2}>
						<Typography className={classes.typo}>PLATINUM</Typography>
						<Tooltip title="Reach UI">
							<ViewButton style={{ backgroundColor: '#f9449f' }}> BUY NOW</ViewButton>
						</Tooltip>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paperContainer3}>
						<Typography className={classes.typo}>DIAMOND</Typography>
						<Tooltip title="Reach UI">
							<ViewButton style={{ backgroundColor: '#f9449f' }}> BUY NOW</ViewButton>
						</Tooltip>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
