


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


		let statsTable = document.getElementById('_statsTable')
		let sortedUsers =  allUsers.sort();
		for (let i = 0 ; i < sortedUsers.length; i++) {
			let row = statsTable.insertRow(i+2);  // To account for the 2 heading lines

			if(sortedUsers[i] == user) {
				row.style.fontSize = 'large';
			}

			row.style.fontWeight = 'bold';

			if (getCount(sortedUsers[i] + "_" + "redcount") > 0)
		       { row.style.color = '#cf133b'; }
		    else { row.style.color = '#3b4ba3'; }

			let cell0 = row.insertCell(0);
			let cell1 = row.insertCell(1);
			let cell2 = row.insertCell(2);

			cell0.innerHTML = sortedUsers[i];
			cell1.innerHTML = getCount(sortedUsers[i] + "_" + "bluecount");
            cell2.innerHTML = getCount(sortedUsers[i] + "_" + "redcount");
		}

	}



    // The cookie names are bluecount, redcount, and lastClass

	function getCookie(cname) {
	   //console.log("getCookie: cname = " + cname)
       let name = cname + "=";
       let decodedCookie = decodeURIComponent(document.cookie);
       let ca = decodedCookie.split(';');
       for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
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
	   //console.log("setCookie: cname = " + cname + "; value = " + cvalue)
       let d = new Date();
       d.setTime(d.getTime() + (exdays*24*60*60*1000));
       let expires = "expires="+ d.toUTCString();
       document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	} // setCookie



	function getCount(cname) {
	   //console.log("getCount: cname = " + cname)
       let count = getCookie(cname);
       if (!count) {
		  count = 0
	   }
	   return (1 * count)
	}

	function getRandomInt(max) {
	  return Math.floor(Math.random() * max);
	}

	function deleteCookies() {

		let allCookies = document.cookie.split(';');
		    if(allCookies) {
		       for (let i = 0 ; i < allCookies.length; i++) {
				   //console.log("allCookies[" + i + "] = " + allCookies[i])
				   if (allCookies[i] != undefined) {
				      let nameAndValue = allCookies[i].split('=');
				      let cname= nameAndValue[0]
				      let cvalue= nameAndValue[1]
		              //console.log(cname + " = " +  cvalue)
		              setCookie(cname, cvalue, -365)
				   }

		       }
		       document.getElementById('_User').innerHTML = "&nbsp;"
		       document.getElementById('_BlueBallCount').innerHTML = "&nbsp;"
		       document.getElementById('_RedBallCount').innerHTML = "&nbsp;"

               let statsTable = document.getElementById('_statsTable')
               let rowCount = statsTable.rows.length
		       for(let i = 2; i < rowCount; i++) {
				   document.getElementById("_statsTable").deleteRow(2);
			   }

		    } else {
			   console.log("There are no cookies to delete")
			}

	}
