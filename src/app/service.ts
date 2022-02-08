
//import {} from '@nativescript/firebase-messaging';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { FingerprintAuth, BiometricIDAvailableResult } from '@nativescript/fingerprint-auth';
import { Dialogs, Http } from '@nativescript/core';
const fingerprint = new FingerprintAuth();
import { runOnUIThread } from './threads'
export class DemoSharedFirebaseMessaging  {


	testIt2( ngZone: NgZone, client: HttpClient): Promise<boolean> {
	
		
				console.log('test firebase-messaging!');
				return this.bioAvailable().then((result) => {
					return fingerprint
						.didFingerprintDatabaseChange()
						.then((changed) => {
							if (changed) {
								return false;
							} else {
								return fingerprint
									.verifyFingerprintWithCustomFallback({
										fallbackMessage:'hello',
										message: 'To make logging in easier for you',								
									})
									.then((bioResult) => {
										console.log("******  BIORESULT ***** ", JSON.stringify(bioResult));
										
										
											// console.log("******  STABLE ***** ", JSON.stringify(bioResult));
											// ngZone.runOutsideAngular(async ()=> {
											
											// 	setTimeout(async ()=>{
												return client.get('https://httpbin.org/get').toPromise().then((value) =>
												{
													console.log("******  OUTSIDE RUNNING ON UI THREAD ***** ", JSON.stringify(bioResult));
													
		
														console.log("******  RUNNING ON UI THREAD ***** ", JSON.stringify(bioResult));
														console.log("Http Result zone", value);
														alert('got http result');
														return true;
													
												});
											// }, 1000);
		
										
												
											
										// });
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

	bioAvailable(): Promise<BiometricIDAvailableResult> {
		return fingerprint.didFingerprintDatabaseChange().then((result) => {
			return fingerprint.available();
		});
		
	}
}
