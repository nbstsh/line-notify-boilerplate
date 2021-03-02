import * as functions from 'firebase-functions';
import axios from 'axios';
import * as qs from 'qs';

const lineNotifyToken = functions.config().line_notify.token;
if (!lineNotifyToken) {
	throw new Error('functions env var must be set. Missing line_notify.token');
}

const LINE_NOTIFY_ENDPOINT = 'https://notify-api.line.me/api/notify';

const sendMessage = async (message: string) => {
	await axios.post(LINE_NOTIFY_ENDPOINT, qs.stringify({ message }), {
		headers: {
			Authorization: `Bearer ${lineNotifyToken}`,
		},
	});
};

const callableFn = functions.https.onCall(async () => {
	try {
		await sendMessage('Hello from firebase');
		console.log('[SUCCESS] Successfully sent a message to line');
	} catch (e) {
		console.error(e);
	}
});

export { callableFn as notifyMessage };
