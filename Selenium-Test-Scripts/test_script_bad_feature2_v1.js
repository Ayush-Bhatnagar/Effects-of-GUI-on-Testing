
/* Version 1 Test Script for testing profile url text input field (bad design => feature 2)
   # Test Case (Textual Description)
		## Input: Domain name for profile urls
		## PreConditions: Relevant version module correspondng to the appUrl should be loaded
		## Expected output: Profile url for a user corresponding to the given domian name should be accepted
*/
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
	let scriptVersion = "v1";
	let module = "bad";
	if(process.argv.length !=4) { 
		console.log("Too few arguments, Please provide the GUI application url to test");  
		await driver.close();
		process.exit(); 
	}
	let appUrl = process.argv[2];
	let domainName = process.argv[3];
	let appUrlSegments = appUrl.split("/");
	let appVersion = appUrlSegments[appUrlSegments.length-1];
	let feature = "2";
	let expectedOutput = "accepted";
	let existingUser = "ayush";
	let cssSelector = `#url`;
	let statusCssSelector = `body > app-root > ${appVersion} > div > div > div.feature2 > label.status.mt-3`;
	console.log(`Testing feature: ${feature} of module: ${module} design`);
	console.log(`Executing Test Script version: ${scriptVersion}`);
	console.log(`App is running at ${appUrl}`);
    await driver.get(appUrl);
	console.log(`Domain Name for profiles: ${domainName}`);
	console.log(`Testing for domain name ${domainName}`);
	let count = 0;
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(`${domainName}/${existingUser}`, Key.RETURN);
	await driver.sleep(2000);
	await driver.findElement(By.css(statusCssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n==0)  count++;
	})
	await driver.findElement(By.css(cssSelector)).clear();
	let modifiedDomainName = `https://domain4.com/users/${existingUser}`;
	console.log(`Testing for domain name ${modifiedDomainName}`);
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(modifiedDomainName, Key.RETURN);
	await driver.sleep(2000);
	await driver.findElement(By.css(statusCssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n!=0)  count++;
	})
	await driver.findElement(By.css(cssSelector)).clear();
	//console.log(count);
	if(count==2) console.log("Test Case Passed");
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