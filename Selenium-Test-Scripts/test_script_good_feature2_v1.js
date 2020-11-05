
/* Version 1 Test Script for testing profile url resricted input field (good design => feature 2)
   # Test Case (Textual Description)
		## Input: Profile Name of a user
		## PreConditions: Relevant version module correspondng to the appUrl should be loaded
		## Expected output: Profile url corresponding to the profile name should be accepted
*/
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
	let scriptVersion = "v1";
	let module = "good";
	if(process.argv.length !=4) { 
		console.log("Too few arguments, Please provide the GUI application url to test");  
		await driver.close();
		process.exit(); 
	}
	let appUrl = process.argv[2];
	let profileName = process.argv[3];
	let appUrlSegments = appUrl.split("/");
	let appVersion = appUrlSegments[appUrlSegments.length-1];
	let feature = "2";
	let expectedOutput = "accepted";
	let cssSelector = `#url`;
	let statusCssSelector = `body > app-root > ${appVersion} > div > div > div.feature2 > label.status.mt-3`;
	console.log(`Testing feature: ${feature} of module: ${module} design`);
	console.log(`Executing Test Script version: ${scriptVersion}`);
	console.log(`App is running at ${appUrl}`);
    await driver.get(appUrl);
	console.log(`Profile Name: ${profileName}`);
	console.log(`Testing for profile names ${profileName}`);
	let count = 0;
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(profileName, Key.RETURN);
	await driver.sleep(2000);
	await driver.findElement(By.css(statusCssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n==0)  count++;
	})
	await driver.findElement(By.css(cssSelector)).clear();
	//console.log(count);
	if(count==1) console.log("Test Case Passed");
	else console.log("Test Case Failed");
  } 
  catch(err) {
	console.log(`Following Error ocurred while executing the test script`);
	console.log(err);
	console.log("Test case Failed");
  }
  finally {
	  setTimeout(async ()=>{
			await driver.close();
	  }, 2000);
  }
})();