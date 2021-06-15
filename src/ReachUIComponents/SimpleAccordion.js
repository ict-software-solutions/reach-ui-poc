import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@reach/accordion';
import '@reach/accordion/styles.css';
import SampleTooltip from './SampleTooltip';

function SimpleAccordion() {
	return (
		<Accordion>
			<AccordionItem>
				<h3>
					<AccordionButton style={{ color: 'white', height: '35px', backgroundColor: 'blue' }}>
						{' '}
						1: Complete Your Profile
					</AccordionButton>
				</h3>
				<AccordionPanel>
					You want to complete your profile with education qualifications and working experience.
					<SampleTooltip/>
				</AccordionPanel>
			</AccordionItem>
			<AccordionItem>
				<h3>
					<AccordionButton style={{ color: 'white', height: '35px', backgroundColor: 'blue' }}>
						{' '}
						2: Forward Next Level
					</AccordionButton>
				</h3>
				<AccordionPanel>
					Finally register for the following position and prepare well for the Interview
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
}

export default SimpleAccordion;
