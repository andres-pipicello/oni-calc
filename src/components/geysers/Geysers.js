import React from 'react';
import { useContext } from '../../context';

// material
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

// components
import DelayedLoader from './../common/DelayedLoader';
import GeyserAdd from './GeyserAdd';
import Geyser from './Geyser';

export const Geysers = () => {
  const classes = useStyles();
  const [{ geysers }] = useContext();

  return (
    <DelayedLoader>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <GeyserAdd />
          </Grid>
          {geysers.inputted.map((geyser, i) => {
            return (
              <Grid key={i} item xs={12} lg={6} className={classes.geyser}>
                <Geyser geyser={geyser} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </DelayedLoader>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing(),
  },
  geyser: {
    padding: theme.spacing(),
  },
}));

export default Geysers;
