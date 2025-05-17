document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("campaignForm");

  if (form) {
    form.addEventListener("submit", function (e) {
		e.preventDefault();

		const firstName = document.getElementById("firstName").value.trim();
		const lastName = document.getElementById("lastName").value.trim();
		const sex = document.querySelector('input[name="Sex"]:checked');
		const email = document.getElementById("Email").value.trim();
		const password = document.getElementById("Password").value.trim();
		const why = document.getElementById("why").value.trim();

		const msgFirst = document.getElementById("firstNameRequired");
		const msgLast = document.getElementById("lastNameRequired");
		const msgSex = document.getElementById("sexRequired");
		const msgEmail = document.getElementById("emailRequired");
		const msgPass = document.getElementById("passwordRequired");
		const msgWhy = document.getElementById("whyRequired");

		msgFirst.style.display = "none";
		msgLast.style.display = "none";
		msgSex.style.display = "none";
		msgEmail.style.display = "none";
		msgPass.style.display = "none";
		msgWhy.style.display = "none";

		let valid = true;

		if (!firstName) {
			msgFirst.style.display = "inline";
			valid = false;
		}

		if (!lastName) {
			msgLast.style.display = "inline";
			valid = false;
		}

		if (!sex) {
			msgSex.style.display = "inline";
			valid = false;
		}

		if (!email) {
			msgEmail.style.display = "inline";
			valid = false;
		}

		if (!password) {
			msgPass.style.display = "inline";
			valid = false;
		}

		if (!why) {
			msgWhy.style.display = "inline";
			valid = false;
		}

		if (!valid) return;

		localStorage.setItem("firstName", firstName);
		localStorage.setItem("lastName", lastName);
		localStorage.setItem("sex", sex.value);
		localStorage.setItem("email", email);
		localStorage.setItem("password", password);
		localStorage.setItem("why", why);

		window.location.href = "proj_profile_BENLOT.html";
		});
	}

	const outFirst = document.getElementById("outFirst");
	if (outFirst) {
		document.getElementById("outFirst").textContent = localStorage.getItem("firstName") || "";
		document.getElementById("outLast").textContent = localStorage.getItem("lastName") || "";
		document.getElementById("outSex").textContent = localStorage.getItem("sex") || "";
		document.getElementById("outEmail").textContent = localStorage.getItem("email") || "";
		document.getElementById("outWhy").textContent = localStorage.getItem("why") || "";
	}
});
