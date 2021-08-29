# superagent-intercept

Add interceptors that will be called during end() e.g. for handling error conditions without having the same code all over the place.

## Support

Please consider supporting the project by starring it on GitHub :)

https://github.com/sgguo/superagent-interceptor

inspired by [superagent intercept](https://github.com/codesuki/superagent-intercept)

## Install

```
npm install @sgguo/superagent-interceptor
```

## Example

```javascript
const intercept = require('@sgguo/superagent-interceptor');

let endIntercept = intercept.endInterceptor((err, res) => {
	if (res.status == 401) {
	   // route to login
	}
});

let beforeSendInterceptor = intercept.beforeSendInterceptor((request) => {
	console.log('before send request');
});

request.get('/api/something/' + someId).use(beforeSendInterceptor).use(endIntercept).end((err, res) {
	// AuthIntercept will be called here.
	// ... code ...
});
```
