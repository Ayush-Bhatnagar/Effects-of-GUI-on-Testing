
/* Version 3 Test Script for testing selection of item in Static Dropdown (bad design => feature 1)
   # Test Case (Textual Description)
		## Input: dropdown item 'Delhi' to be selected
		## PreConditions: Relevant version module correspondng to the appUrl should be loaded
		## Expected output: the dropdown item 'Delhi' as specified in the input should be selected

*/
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
	let scriptVersion = "v3";
	let module = "bad";
	if(process.argv.length !=3) { 
		console.log("Too few arguments, Please provide the GUI application url to test");  
		await driver.close();
		process.exit(); 
	}
	let appUrl = process.argv[2];
	let appUrlSegments = appUrl.split("/");
	let appVersion = appUrlSegments[appUrlSegments.length-1];
	let feature = "1";
	let expectedOutput = "delhi"
	let cssSelector = `body > app-root > ${appVersion} > div > div > div.feature1 > div > div > a:nth-child(9)`;
	console.log(`Testing feature: ${feature} of module: ${module} design`);
	console.log(`Executing Test Script version: ${scriptVersion}`);
	console.log(`App is running at ${appUrl}`);
    await driver.get(appUrl);
	await driver.findElement(By.id('dropdownMenuButton')).click();
	await driver.sleep(2000);
	await driver.findElement(By.css(cssSelector)).getText().then((txt)=>{
		let output = txt.toLowerCase();
		console.log(`Expected Output: ${expectedOutput}`);
		console.log(`Actual Output: ${output}`);
		let n = output.localeCompare(expectedOutput);
		if(n==1) console.log("Test Case Failed");
		else if(n==0)  console.log("Test Case Passed");
	})
	await driver.findElement(By.css(cssSelector)).click();
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