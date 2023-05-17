# Bulk Remove Outdated URL
## Remove Outdated urls

### Install Node JS and npm
Install Node JS and NPM. It is tested on Node version 20 and NPM version 9
You can download NODE JS for windows here: https://nodejs.org/en/download

### Install selenium browser driver

You need the selenium browser driver for your browser.
Suppose you are using Chrome 113.0.5672.93, you need to download that driver for selenium browser. You can do it from here  https://chromedriver.chromium.org/downloads
Now, You need to set the System environment path variable. Suppose you have put the selenium browser driver in the  folder  C:\Users\dprah\OneDrive\Documents\Workspace\selenium
Then open your powershell in administrative mode and run the followng command:
```
$env:PATH +=";C:\Users\dprah\OneDrive\Documents\Workspace\selenium"
```
You need to replace this directory location with yours.

### Installing project dependencies

Navigate into the project folder and run the following command

```
npm install
```
=======================================================
## Removing URLs:
### Google account credential
Open the file `credentials.json` and put email and password for google account.

```
{
    "email": "your@email.address",
    "password": "your_account_password"
}
```
### URL list

Open the `dummy.csv` file put the URLs in the following format

```
1,"url1.example.com"
2,"url2.dummy.com/simple-page",
3,"url3.anotherdomain.org/another/page"
```

### Running the script

Navigate into the project folder and open the powershell there and run
```
node rm-main.js
```