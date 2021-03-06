
//import {} from '@nativescript/firebase-messaging';
/*
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { BiometricAuth, BiometricIDAvailableResult } from '@nativescript/biometrics';
import { Dialogs, Http } from '@nativescript/core';
const fingerprint = new BiometricAuth();
export class DemoSharedFirebaseMessaging  {
	
	testIt( ngZone: NgZone, client: HttpClient) {

		console.log("CALLION CHECK")
		client.get("https://nativescript-http-integration-check.local").toPromise().then((res) => {
			console.log("CALLION CHECK RESULT")
			const jsonContent = JSON.parse(res.toString());
			if (!jsonContent || !jsonContent.SelfCheck || jsonContent.SelfCheck !== "OK!") {
				console.log("CALLION CHECK RESULT ERROR")
				Dialogs.alert("nativescript-http automatic integration failed! Request to https://nativescript-http-integration-check.local failed");
			}
		}).catch((e) => {
			console.log("CALLION CHECK ERROR")
			Dialogs.alert("nativescript-http automatic integration failed! Request to https://nativescript-http-integration-check.local failed");
		});




		console.log('test firebase-messaging!');
		this.bioAvailable().then((result) => {
			fingerprint
				.didBiometricDatabaseChange()
				.then((changed) => {
					if (changed) {
						return false;
					} else {
						return fingerprint
							.verifyBiometric({
								title: 'Biometric login',
								message: 'To make logging in easier for you',
								pinFallback: true,
							})
							.then((bioResult) => {
								console.log("******  BIORESULT ***** ", JSON.stringify(bioResult));
								
								
								client.get('https://httpbin.org/get').toPromise()
									.then((value) => {
										
										console.log("Http Result zone", value);
										alert('got http result');
										return true;
										
									})
									.catch((ex) => console.log('catch', ex))
									.finally(() => console.log('finally'));
								
							})
							.catch((err) => {
								console.log(JSON.stringify(err));
								return false;
							});
					}
				})
				.catch((ex) => {
					return false;
				});
		});
		
	}

	async bioAvailable(): Promise<BiometricIDAvailableResult> {
		if (!(await fingerprint.didBiometricDatabaseChange())) {
			return fingerprint.available();
		}
	}
}
*/