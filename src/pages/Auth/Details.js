import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import SimpleAccordion from '../../ReachUIComponents/SimpleAccordion';
import Combo from '../../ReachUIComponents/Combo';
import SimpleSnackbar from '../../Components/SimpleSnackbar';
import Checklist from '../../ReachUIComponents/Checklist';
import Tooltip from '@material-ui/core/Tooltip';



export default function Details() {
        const [tabIndex, setTabIndex] = React.useState(0);
        const handleSliderChange = (event) => {
            setTabIndex(parseInt(event.target.value, 10));
        };
        const handleTabsChange = (index) => {
            setTabIndex(index);
        };
        return (
            <div>
                <input
                    type="range"
                    min="0"
                    max="2"
                    value={tabIndex}
                    onChange={handleSliderChange}
                />
                <Tooltip title="Reach UI">
                <Tabs index={tabIndex} onChange={handleTabsChange}>
                    <TabList>
                        <Tab style={{color:"white"}}>Register Yourself</Tab>
                        <Tab style={{ color: "white" }}>Select Your Scheme</Tab>
                        <Tab style={{ color: "white" }}>Final Step</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <SimpleAccordion/>
                        </TabPanel>
                        <TabPanel>
                            <Combo />
                            <br/>
                            <SimpleSnackbar/>
                        </TabPanel>
                        <TabPanel>
                            <p>Here is your FINAL STEP.</p>
                            <Checklist/>
                        </TabPanel>
                    </TabPanels>
                    </Tabs>
                </Tooltip>
            </div>
        );
    }