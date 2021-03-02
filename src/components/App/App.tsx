import { useState } from 'react';
import { callNotifyMessage } from '../../lib/callables';
import './App.css';

export const App = () => {
	const [sending, setSending] = useState(false);

	return (
		<div className='App'>
			<div>
				<button
					className='notify-button'
					onClick={() => {
						setSending(true);
						callNotifyMessage().finally(() => setSending(false));
					}}
					disabled={sending}
				>
					Notify !
				</button>
			</div>
		</div>
	);
};
