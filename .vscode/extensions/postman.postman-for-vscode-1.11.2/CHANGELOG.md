# Changelog

## 1.11.2
* Support for Packages in collections and folders
* Bug fixes and user experience improvements

## 1.10.1
* Support for Packages in Request
* Fixed an issue where API requests were missing when using the filter search box- [#12875](https://github.com/postmanlabs/postman-app-support/issues/12875)
* Fixed an issue where downloaded files were saved with incorrect extension - [#13515](https://github.com/postmanlabs/postman-app-support/issues/13515)
* Fixed the gRPC method selection dropdown menu position issue - [#13008](https://github.com/postmanlabs/postman-app-support/issues/13008)

## 1.9.0
* Enhanced the response section by adding the ability to download responses, save responses to a file and open them in a new tab
* Fixed issue with file upload in Windows - [#13511](https://github.com/postmanlabs/postman-app-support/issues/13511)
  
## 1.8.1
* Support for Windsurf IDE - [#13284](https://github.com/postmanlabs/postman-app-support/issues/13284)
* Fixed issues with file upload in Collection Runner - [#13197](https://github.com/postmanlabs/postman-app-support/issues/13197)
* Fixed issues with file upload in Request's Body `form-data` section - [#13394](https://github.com/postmanlabs/postman-app-support/issues/13394)
* Fixed an issue where `Iterations` & `Data file type` were not auto updated on selecting a file in Collection runner

## 1.7.0
* Sync imported .env files with their respective environments in Postman

## 1.6.1
* Fixed issues with file upload in request body on Windows platform and Cursor IDE
  - [#12797](https://github.com/postmanlabs/postman-app-support/issues/12797)
  - [#13367](https://github.com/postmanlabs/postman-app-support/issues/13367)

## 1.6.0
* Import multiple .env files as Postman environments.

## 1.5.1
* Fixed issue with file upload in request body - [#12797](https://github.com/postmanlabs/postman-app-support/issues/12797)
  
## 1.5.0
* Import `.env` files as Postman Environments

## 1.4.1
* New login experience for new users
* Fixed an issue with multiple files request - [#12574](https://github.com/postmanlabs/postman-app-support/issues/12574)
* Fixed an issue where the request created from cURL was saved incorrectly

## 1.3.0
* Drag and drop requests and folders to re-arrange in and across the collections [#12475](https://github.com/postmanlabs/postman-app-support/issues/12475)
* Updated information on the sign-in page

## 1.2.1
* Added license information to the extension manifest

## 1.2.0
* Added support for VSCodium and Cursor IDE

## 1.1.0
* Access our European Union Data Center for controlled data storage. Early access on Enterprise plan, by invitation only. If you're interested in getting early access, [reach out to our sales team](https://www.postman.com/company/contact-sales/)
* Fixed an issue with localhost resolution [#12939](https://github.com/postmanlabs/postman-app-support/issues/12939)
* Fixed an issue with previewing of data file in Collection Runner
* Other minor bugfixes for collection runner and importing environment via file

## 1.0.3
* Fixed an issue with the internal telemetry library

## 1.0.2
* Fixed an issue with importing files in VSCode Virtual Workspaces - [#12848](https://github.com/postmanlabs/postman-app-support/issues/12848)
* Fixed an issue which caused login to fail for some users- [#12777](https://github.com/postmanlabs/postman-app-support/issues/12777)
* Fixed deleting of collection runs via 'Clear All' action in History
* Fixed an input issue with iterations field in Collection Runner
* Fixed handling of unknown response codes in HTTP requests

## 1.0.1
* Fixed an issue where some users were not able to login into the extension - [#12800](https://github.com/postmanlabs/postman-app-support/issues/12800)

## 1.0.0

* Postman’s VS Code extension is now **generally available**, offering a seamless, efficient and collaborative environment for developers 
* Fixed an issue where the login flow was getting cancelled if the user clicked on the Copy button in the VS Code’s Open External Website modal

## 0.19.3

* Disabled login for un-supported versions of VS Code

## 0.19.1

* Invite users to a Workspace
* Collaborate with other people by sharing Collections and Environments with them
* Manage team roles for Collections and Environments

## 0.18.0

* Import folder and multiple collection/environment files

## 0.17.0

* Import your Postman environments
* View summary for collection runs
* Delete collection runs

## 0.16.0

* View complete documentation for collections, folders and requests
* Use CSV or JSON data files to run your collections
* Import your Postman collections

## 0.15.0

* Manage settings for requests
* Fixed an issue where the bearer token auth variable was not saved in the collection and folder - [#12428](https://github.com/postmanlabs/postman-app-support/issues/12428)

## 0.14.3

* Run your Postman collections and folders
* Fixed an issue where folders created from the extension were not getting deleted

## 0.13.1

* Use dynamic variables in your requests, scripts, environments and documentation

## 0.12.1

* Edit and update Request documentation
* Authenticate your HTTP requests using OAuth 1.0

## 0.11.0

* Edit and update Folder documentation

## 0.10.0

* Authenticate your HTTP requests using AWS Signature Auth

## 0.9.1

* Fixed an issue where some users were not able to login into the extension

## 0.9.0

* Edit and update Collection documentation
* Ability to share OAuth 2.0 tokens
* Fixed an issue where some of the edited cookies were not getting saved successfully - [#12303](https://github.com/postmanlabs/postman-app-support/issues/12303)

## 0.8.0

* Debug API calls and script execution with the help of Postman Console - [12187](https://github.com/postmanlabs/postman-app-support/issues/12187)

## 0.7.0

* Added support to auto refresh OAuth2 tokens
* Fixed an issue where local user data was not getting cleared on logout

## 0.6.2

* Fixed an issue where `Import cURL` command did not recognize graphql request body type - [12261](https://github.com/postmanlabs/postman-app-support/issues/12261)
* Fixed an issue where OAuth token details were not displayed when using "implicit" grant mode - [12176](https://github.com/postmanlabs/postman-app-support/issues/12176)

## 0.6.1

* Disable "Run in Postman" action for the VSCode terminal - [12239](https://github.com/postmanlabs/postman-app-support/issues/12239)
* Fixed an issue where creating requests by pasting cURL commands in the URL input did not work
* Fixed an issue where duplicate Authorization query params were added when using API key authentication method

## 0.6.0

* Manage the generated OAuth 2.0 tokens - [#12176](https://github.com/postmanlabs/postman-app-support/issues/12176)
* Run the requests from the editors and the terminal with "Run in Postman" action
* New commands and shortcuts for creating collection and environment
* New shortcuts for opening the Postman extension and new HTTP Request tab
* Fixed an issue where the URL editor would lose focus to another tab

## 0.5.5

* Fixed an issue where sending the request containing comments in the request body was failing - [#12210](https://github.com/postmanlabs/postman-app-support/issues/12210)

## 0.5.4

* Search and select Public and Partner workspaces from the workspace switcher - [#12012](https://github.com/postmanlabs/postman-app-support/issues/12012)
* Fixed an issue where the code snippet did not use the current value of the environment variables - [#12184](https://github.com/postmanlabs/postman-app-support/issues/12184)
* Fixed an issue where the variable value was getting truncated in the popover - [#12198](https://github.com/postmanlabs/postman-app-support/issues/12198)

## 0.5.2

* Fixed an issue where the two pane layout icon was missing

## 0.5.1

* Warning for duplicate variable names in an environment
* Performance improvements
* Fixed an issue where the current environment did not resolve if globals failed to fetch
* Fixed an issue where the response was removed on creating an example from a request

## 0.4.1

* Bug fixes and user experience improvements

## 0.4.0

* Create and manage collections and folders to group HTTP requests
* Save untitled requests to collections and folders
* Create and manage examples of saved requests
* Add a set of variables to an environment to use in HTTP requests, collections, etc
* Generate code snippets for the HTTP requests in a multitude of languages
* Authorize your request using OAuth 2.0

## 0.3.1

* Fixed an issue where login flow was not completing successfully - [#12159](https://github.com/postmanlabs/postman-app-support/issues/12159)

## 0.3.0

* Debug GraphQL APIs using `graphql` body type in HTTP request
* Switch between top-down or side-by-side layout for  HTTP request
* Create requests quickly by pasting cURL commands in the URL input
* Send requests using custom HTTP methods
* Search through history to find your request
* Delete requests in history or clear it all

## 0.2.0

* Create new request from `File > New File` menu
* View size breakdown of request and response
* View request and response timing graph
* Bug fixes

## 0.1.1

* Updated command names

## 0.1.0

* Build, test, and debug APIs next to your code
* Debug HTTP,  Websocket, and gRPC APIs
* Authorize your request using API Key, Basic Auth, or Bearer Token
* Import cURL snippets as requests
* Save your work within workspace history and go back to them any time
* View, modify, or add cookies to send with your requests
