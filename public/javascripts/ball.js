


	document.addEventListener('DOMContentLoaded', () => {

		doonload("The message is DOC is loaded")

		document.getElementById('_BlueBallCount').innerHTML = getCount("bluecount")
		document.getElementById('_RedBallCount').innerHTML = getCount("redcount")

		document.getElementById("_deleteButton").onclick = () => {
			deleteCookies()
		}

	}) // DOMContentLoaded

	function doonload(msg) {


		let randomNumber=0
		let countCookie=""
		let viewCount=0
		let lastClass = getCookie("lastClass")

		if (!lastClass) {
			randomNumber = getRandomInt(2)
			//console.log(`The random number is ${randomNumber}`)
			if (randomNumber == 1) {
				lastClass = "bgblue"
				countCookie = "bluecount"
			} else {
				lastClass = "bgred"
				countCookie = "redcount"
			}
		} else {
			countCookie = (lastClass).replace("bg", "") + "count"
		}

		setCookie("lastClass", lastClass, 365);
		viewCount = (1 * getCount(countCookie)) + 1
		setCookie(countCookie, viewCount, 365);


		let theBall = document.querySelector('#_ball')


		theBall.classList.add(lastClass)

	}



    // The cookie names are bluecount, redcount, and lastClass

	function getCookie(cname) {
       var name = cname + "=";
       var decodedCookie = decodeURIComponent(document.cookie);
       var ca = decodedCookie.split(';');
       for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
             c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
          }
       }
       return "";
	} // getCookie(cname)




	function setCookie(cname, cvalue, exdays) {
       var d = new Date();
       d.setTime(d.getTime() + (exdays*24*60*60*1000));
       var expires = "expires="+ d.toUTCString();
       document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	} // setCookie



	function getCount(cname) {
       var count = getCookie(cname);
       if (!count) {
		  count = 0
	   }
	   return (1 * count)
	}

	function getRandomInt(max) {
	  return Math.floor(Math.random() * max);
	}

	function deleteCookies() {
		document.cookie = "bluecount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "redcount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "lastClass=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "Bluecount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "Redcount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	}


