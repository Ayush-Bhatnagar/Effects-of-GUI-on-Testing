
/* Version 1 Test Script for testing input of amount in text input field (bad design => feature 4)
   # Test Case (Textual Description)
		## Input: Max limit on the amount to be entered
		## PreConditions: Relevant version module correspondng to the appUrl should be loaded
		## Expected output: Amount value as per the maximum limit should be accepted

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
	let maxLimit = parseInt(process.argv[3]);
	let appUrlSegments = appUrl.split("/");
	let appVersion = appUrlSegments[appUrlSegments.length-1];
	let feature = "4";
	let expectedOutput = "accepted";
	let cssSelector = `body > app-root > ${appVersion} > div > div > div.feature4 > div > input`;
	let statusCssSelector = `body > app-root > ${appVersion} > div > div > div.feature4 > label.status.mt-3`;
	console.log(`Testing feature: ${feature} of module: ${module} design`);
	console.log(`Executing Test Script version: ${scriptVersion}`);
	console.log(`App is running at ${appUrl}`);
    await driver.get(appUrl);
	console.log(`Max limit on amount: ${maxLimit}`);
	let number1  = maxLimit	 // maximum accepted amount
	console.log(`Testing with maxmimum possible amount i.e. ${number1}`);
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
	let number2  = maxLimit-1;	// amount less than the maximum limit
	console.log(`Testing with amount less than the maximum limit i.e. ${number2}`);
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(number2, Key.RETURN);
	await driver.sleep(2000);
	await driver.findElement(By.css(statusCssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n==0)  count++;
	})
	await driver.findElement(By.css(cssSelector)).clear();
	let number3  = maxLimit+1;		// amount more than the maximum limit
	console.log(`Testing with amount more than the maximum limit ${number3}`);
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
	let number4  = 0;		// minimum possible amount
	console.log(`Testing with minimum possible amount ${number4}`);
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(number4, Key.RETURN);
	await driver.sleep(2000);
	await driver.findElement(By.css(statusCssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n==0)  count++;
	})
	await driver.findElement(By.css(cssSelector)).clear();
	let number5  = -1;		// negative amount
	console.log(`Testing with negative amount ${number5}`);
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(number5, Key.RETURN);
	await driver.sleep(2000);
	await driver.findElement(By.css(statusCssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n!=0)  count++;
	})
	await driver.findElement(By.css(cssSelector)).clear();
	let number6  = "dummyText"		// textual input
	console.log(`Testing with number ${number6} i.e. textual input`);
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).sendKeys(number6, Key.RETURN);
	await driver.sleep(2000);
	await driver.findElement(By.css(statusCssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n!=0)  count++;
	})
	await driver.findElement(By.css(cssSelector)).clear();
	console.log(count);
	if(count==6) console.log("Test Case Passed");
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