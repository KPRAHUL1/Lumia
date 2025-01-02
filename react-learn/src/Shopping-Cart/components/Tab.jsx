import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Summerimage from './Summerimage';
import Winterimages from './Winterimages';
import { styled } from '@mui/material/styles';

const TransitionContainer = styled('div')(({ theme }) => ({
  transition: 'opacity 0.3s ease, height 0.3s ease',
  opacity: 0,
  height: 0,
  overflow: 'hidden',
  '&.active': {
    opacity: 1,
    height: 'auto',
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <TransitionContainer className={value === index ? 'active' : ''}>
        {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
      </TransitionContainer>
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
    <Box sx={{display:"flex",justifyContent:"center"}}>
        <Tabs
        sx={{ border: '1px ridge grey', borderRadius: '25px',  }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
 
        >
          <Tab
          
            label="WINTER"
            {...a11yProps(0)}
            sx={{
              borderRadius: '25px',
              backgroundColor: value === 0 ? 'blue' : 'transparent',
              color: value === 0 ? 'white' : 'black',
              '&.Mui-selected': {
                backgroundColor: 'blue',
                color: 'white',
              },
            }}
          />
          <Tab
            label="SUMMER"
            {...a11yProps(1)}
            sx={{
              borderRadius: '25px',
              backgroundColor: value === 1 ? 'blue' : 'transparent',
              color: value === 1 ? 'white' : 'black',
              '&.Mui-selected': {
                backgroundColor: 'blue',
                color: 'white',
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Winterimages />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Summerimage />
      </CustomTabPanel>
    </Box>
  );
}
