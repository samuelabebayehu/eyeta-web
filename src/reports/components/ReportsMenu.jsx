import React from 'react';
import { Divider, List, ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import TimelineIcon from '@mui/icons-material/Timeline';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import RouteIcon from '@mui/icons-material/Route';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import NotesIcon from '@mui/icons-material/Notes';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../../common/components/LocalizationProvider';
import { useAdministrator, useRestriction } from '../../common/util/permissions';
import MenuItem from '../../common/components/MenuItem';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[900],
    },
    secondary: {
      main: orange[900],
    }
  },
});

const ReportsMenu = () => {
  const t = useTranslation();
  const location = useLocation();

  const admin = useAdministrator();
  const readonly = useRestriction('readonly');

  return (
    <ThemeProvider theme={theme}>
      <List>
        <MenuItem
          title={t('reportCombined')}
          link="/reports/combined"
          icon={<StarIcon color="secondary" />}
          selected={location.pathname === '/reports/combined'}
        />
        <MenuItem
          title={t('reportRoute')}
          link="/reports/route"
          icon={<TimelineIcon color="secondary" />}
          selected={location.pathname === '/reports/route'}
        />
        <MenuItem
          title={t('reportEvents')}
          link="/reports/event"
          icon={<NotificationsActiveIcon color="secondary" />}
          selected={location.pathname === '/reports/event'}
        />
        <MenuItem
          title={t('reportTrips')}
          link="/reports/trip"
          icon={<PlayCircleFilledIcon color="secondary" />}
          selected={location.pathname === '/reports/trip'}
        />
        <MenuItem
          title={t('reportStops')}
          link="/reports/stop"
          icon={<PauseCircleFilledIcon color="secondary" />}
          selected={location.pathname === '/reports/stop'}
        />
        <MenuItem
          title={t('reportSummary')}
          link="/reports/summary"
          icon={<FormatListBulletedIcon color="secondary" />}
          selected={location.pathname === '/reports/summary'}
        />
        <MenuItem
          title={t('reportChart')}
          link="/reports/chart"
          icon={<TrendingUpIcon color="secondary" />}
          selected={location.pathname === '/reports/chart'}
        />
        <MenuItem
          title={t('reportReplay')}
          link="/replay"
          icon={<RouteIcon color="secondary" />}
        />
      </List>
      <Divider />
      <List>
        <MenuItem
          title={t('sharedLogs')}
          link="/reports/logs"
          icon={<NotesIcon color="secondary" />}
          selected={location.pathname === '/reports/logs'}
        />
        {!readonly && (
          <MenuItem
            title={t('reportScheduled')}
            link="/reports/scheduled"
            icon={<EventRepeatIcon color="secondary" />}
            selected={location.pathname === '/reports/scheduled'}
          />
        )}
        {admin && (
          <MenuItem
            title={t('statisticsTitle')}
            link="/reports/statistics"
            icon={<BarChartIcon color="secondary" />}
            selected={location.pathname === '/reports/statistics'}
          />
        )}
      </List>
    </ThemeProvider>
  );
};

export default ReportsMenu;
