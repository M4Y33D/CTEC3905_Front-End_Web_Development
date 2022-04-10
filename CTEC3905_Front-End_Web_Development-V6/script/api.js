// weatehr api
function getweather()
{
	fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/birmingham?unitGroup=metric&key=JXQE7VCK7KR4KCTHTJ5QGTP4J&contentType=json", {
	  "method": "GET",
	  "headers": {
	  }
	  })
	.then(response => {
	  console.log(response);
	})
	.catch(err => {
	  console.error(err);
	});
}
