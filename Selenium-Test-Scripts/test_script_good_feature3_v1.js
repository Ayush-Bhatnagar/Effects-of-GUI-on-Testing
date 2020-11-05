
/* Version 1 Test Script for testing input of mobile number in numeric input field (good design => feature 3)
   # Test Case (Textual Description)
		## Input: Number of digits in a mobile number
		## PreConditions: Relevant version module correspondng to the appUrl should be loaded
		## Expected output: the mobile number with expected number of digits should be accepted

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
	let digits = parseInt(process.argv[3]);
	let appUrlSegments = appUrl.split("/");
	let appVersion = appUrlSegments[appUrlSegments.length-1];
	let feature = "3";
	let expectedOutput = "accepted";
	let cssSelector = `#mobile-no`;
	let statusCssSelector = `body > app-root > ${appVersion} > div > div > div.feature3 > label.status.mt-3`;
	console.log(`Testing feature: ${feature} of module: ${module} design`);
	console.log(`Executing Test Script version: ${scriptVersion}`);
	console.log(`App is running at ${appUrl}`);
    await driver.get(appUrl);
	console.log(`Number of digits: ${digits}`);
	let number1  = Math.floor(Math.pow(10,digits-1) + Math.random() * 9 * Math.pow(10, digits-1))	 // number with expected number of digits
	console.log(`Testing with number ${number1} having expected number of digits`);
	let count = 0;
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(number1, Key.RETURN);
	await driver.sleep(2000);
	await driver.findElement(By.css(statusCssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n==0)  count++;
	})
	await driver.findElement(By.css(cssSelector)).clear();
	let number2  = Math.floor(Math.pow(10,digits-2) + Math.random() * 9 * Math.pow(10, digits-2))	// number with less than expected number of digits
	console.log(`Testing with number ${number2} having less than expected number of digits`);
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(number2, Key.RETURN);
	await driver.sleep(2000);
	await driver.findElement(By.css(statusCssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n!=0)  count++;
	})
	await driver.findElement(By.css(cssSelector)).clear();
	let number3  = Math.floor(Math.pow(10,digits) + Math.random() * 9 * Math.pow(10, digits))		// number with more than expected number of digits
	console.log(`Testing with number ${number3} having more than expected number of digits`);
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(number3, Key.RETURN);
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
	if(count==3) console.log("Test Case Passed");
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