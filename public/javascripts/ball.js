


	document.addEventListener('DOMContentLoaded', () => {

		doonload("The message is DOC is loaded")


		document.getElementById("_deleteButton").onclick = () => {
			deleteCookies()
		}

	}) // DOMContentLoaded

	function doonload(msg) {


        let user = ""
		do {
		   user = prompt("Please enter your name:","");
	    }
		while (user == "" || user == null) ;

        let strAllUsers = getCookie("usernames");
        if (!strAllUsers) {
			strAllUsers = user
		}
		let allUsers = strAllUsers.split(',');

		if (!allUsers.includes(user)) {
		   allUsers.push(user);
		}
		strAllUsers = allUsers.join(',')

		setCookie("usernames", strAllUsers, 365)
		console.log("usernames = " + strAllUsers)


		let randomNumber=0
		let countCookie=""
		let viewCount=0
		let lastClass = getCookie(user + "_" + "lastClass")

		if (!lastClass) {
			randomNumber = getRandomInt(2)
			//console.log(`The random number is ${randomNumber}`)
			if (randomNumber == 1) {
				lastClass = "bgblue"
				countCookie = user + "_" + "bluecount"
			} else {
				lastClass = "bgred"
				countCookie = user + "_" + "redcount"
			}
		} else {
			countCookie =  user + "_" + (lastClass).replace("bg", "") + "count"
		}

		setCookie(user + "_" + "lastClass", lastClass, 365);
		viewCount = (1 * getCount(countCookie)) + 1
		setCookie(countCookie, viewCount, 365);


		let theBall = document.querySelector('#_ball')

        theBall.style.display = 'block';
		theBall.classList.add(lastClass)

        document.getElementById('_User').innerHTML = user
		document.getElementById('_BlueBallCount').innerHTML = getCount(user + "_" + "bluecount")
		document.getElementById('_RedBallCount').innerHTML = getCount(user + "_" + "redcount")

	}



    // The cookie names are bluecount, redcount, and lastClass

	function getCookie(cname) {
	   console.log("getCookie: cname = " + cname)
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
	   console.log("setCookie: cname = " + cname + "; value = " + cvalue)
       var d = new Date();
       d.setTime(d.getTime() + (exdays*24*60*60*1000));
       var expires = "expires="+ d.toUTCString();
       document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	} // setCookie



	function getCount(cname) {
	   console.log("getCount: cname = " + cname)
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

		var allCookies = document.cookie.split(';');
		    console.log("allCookies = " +  allCookies + "; length = " + allCookies.length)
		    if(allCookies) {
		       for (var i = 0 ; i < allCookies.length; i++) {
				   console.log("allCookies[" + i + "] = " + allCookies[i])
				   if (allCookies[i] != undefined) {
				      let nameAndValue = allCookies[i].split('=');
				      let cname= nameAndValue[0]
				      let cvalue= nameAndValue[1]
		              console.log(cname + " = " +  cvalue)
		              setCookie(cname, cvalue, -365)
				   }

		       }
		    } else {
			   console.log("There are no cookies to delete")
			}


        /*
		document.cookie = "bluecount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "redcount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "lastClass=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "Bluecount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "Redcount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "usernames=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		*/


	}


