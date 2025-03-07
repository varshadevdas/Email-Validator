console.log("This is my script");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "varshadevdas2024",
  email: "varshadevdas2024@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked!");
  resultCont.innerHTML = ` <img width =" 233"src="img/loading.svg" alt=""> `
  let key = "ema_live_AJkQjCkHPWphdUb1gOc89Y8J6PYQjoOZC9gILzeM";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = "";
  for (let key of Object.keys(result)) {
    if(result[key] !=="" && result[key] !== " "){
        str += `<div>${key}: ${result[key]}</div>`; // Use backticks and correct variable name
    }
  }

  console.log(str);
  document.getElementById("resultCont").innerHTML = str; // Ensure it's properly assigned
});
