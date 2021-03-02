import { functioons } from './firebase';

// use emulator for dev env
if (process.env.NODE_ENV === 'development') {
	console.log('Emulator Running');
	functioons.useEmulator('localhost', 5001);
}

export const callNotifyMessage = functioons.httpsCallable('notifyMessage');
