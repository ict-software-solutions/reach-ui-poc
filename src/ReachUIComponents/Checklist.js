import '@reach/checkbox/styles.css';
import { MixedCheckbox } from '@reach/checkbox';
import React from 'react';
import { PaymentButton } from './Button.style';

export default function Checklist() {
	const [ checked, setChecked ] = React.useState(true);
	return (
		<div>
			<label>
				<MixedCheckbox
					value="whatever"
					checked={checked}
					onChange={(event) => {
						setChecked(event.target.checked);
					}}
				/>
				Online Payment / Debit Card
			</label>
			<br />
			<label>
				<MixedCheckbox checked="mixed" />
				Cash On Delivery ( COD )
			</label>
			<div style={{ marginTop: 10 }}>
				<PaymentButton onClick={() => setChecked('mixed')}>Proceed</PaymentButton>
			</div>
		</div>
	);
}
