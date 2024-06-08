const urls = JSON.parse(atob('WyAiaHR0cHM6Ly8xcHRiYS5jb20vIiwgImh0dHBzOi8vNTJwdC5zaXRlLyIsICJodHRwczovL2FidG9ycmVudHMubWUvIiwgImh0dHBzOi8vYWlkb3J1LW9ubGluZS5tZS8iLCAiaHR0cHM6Ly9haXRoZXIuY2MvIiwgImh0dHBzOi8vYWxwaGFyYXRpby5jYy8iLCAiaHR0cHM6Ly9hbmltZWJ5dGVzLnR2LyIsICJodHRwczovL2FudGhlbGlvbi5tZSIsICJodHRwczovL2FzaWFuY2luZW1hLm1lLyIsICJodHRwczovL2F1ZGllbmNlcy5tZS8iLCAiaHR0cHM6Ly9hdWRpb25ld3Mub3JnLyIsICJodHRwczovL2F6dXNhLndpa2kiLCAiaHR0cHM6Ly9iYWNvbmJpdHMub3JnLyIsICJodHRwczovL2JlbWFuaXNvLndzLyIsICJodHRwczovL2JleW9uZC1oZC5tZS8iLCAiaHR0cHM6Ly9iaWJsaW90aWsubWUvIiwgImh0dHBzOi8vYml0YnIuY2MvIiwgImh0dHBzOi8vYml0cHQuY24vIiwgImh0dHBzOi8vYmx1dG9waWEuY2MvIiwgImh0dHBzOi8vYnJvYWRjYXN0aGUubmV0LyIsICJodHRwczovL2Jyb2tlbnN0b25lcy5pcyIsICJodHRwOi8vYnQubmV1Ni5lZHUuY24vIiwgImh0dHBzOi8vYnd0b3JyZW50cy50di8iLCAiaHR0cHM6Ly9ieXIucHQvIiwgImh0dHBzOi8vY2FycHQubmV0LyIsICJodHRwczovL2NjZmJpdHMub3JnLyIsICJodHRwczovL2NncGVlcnMudG8vIiwgImh0dHBzOi8vY2luZW1hZ2VkZG9uLm5ldC8iLCAiaHR0cHM6Ly9jbHViLmhhcmVzLnRvcC8iLCAiaHR0cHM6Ly9jbmxhbmcub3JnLyIsICJodHRwczovL2NvbmNlcnRvcy5saXZlLyIsICJodHRwczovL2N5YW5idWcubmV0IiwgImh0dHBzOi8vZGFqaWFvLmN5b3UvIiwgImh0dHBzOi8vZGVzaXRvcnJlbnRzLnR2LyIsICJodHRwczovL2RpY211c2ljLmNvbS8iLCAiaHR0cHM6Ly9kaWdpdGFsY29yZS5jbHViLyIsICJodHRwczovL2Rpc2NmYW4ubmV0LyIsICJodHRwczovL3B0LmVjdXN0LnBwLnVhLyIsICJodHRwczovL2V0OC5vcmcvIiwgImh0dHBzOi8vZXh0cmVtbHltdG9ycmVudHMud3MvIiwgImh0dHBzOi8vZmVtZG9tY3VsdC5vcmcvIiwgImh0dHBzOi8vZmlsZWxpc3QuaW8vIiwgImh0dHBzOi8vZnNtLm5hbWUvIiwgImh0dHBzOi8vZ2F5LXRvcnJlbnRzLm9yZy8iLCAiaHR0cHM6Ly9nYXplbGxlZ2FtZXMubmV0LyIsICJodHRwczovL2dmeHBlZXJzLm5ldC8iLCAiaHR0cHM6Ly9ncmVhdHBvc3RlcndhbGwuY29tLyIsICJodHRwczovL2hhd2tlLnVuby8iLCAiaHR0cHM6Ly9oZC1zcGFjZS5vcmcvIiwgImh0dHBzOi8vaGQtdG9ycmVudHMub3JnLyIsICJodHRwczovL2hkYXJlYS5jbHViLyIsICJodHRwczovL2hkYXRtb3MuY2x1YiIsICJodHRwczovL2hkYml0cy5vcmcvIiwgImh0dHBzOi8vaGRjaGluYS5vcmcvIiwgImh0dHBzOi8vaGRjaXR5LmNpdHkvIiwgImh0dHBzOi8vd3d3LmhkZG9sYnkuY29tLyIsICJodHRwczovL2hkZi53b3JsZC8iLCAiaHR0cHM6Ly9oZGZhbnMub3JnIiwgImh0dHBzOi8vaGRmdW4ubWUvIiwgImh0dHBzOi8vaGRob21lLm9yZy8iLCAiaHR0cDovL2hkbWF5aS5jb20vIiwgImh0dHBzOi8vaGRwdC54eXovIiwgImh0dHA6Ly9oZHJvdXRlLm9yZy8iLCAiaHR0cHM6Ly9oZHNreS5tZS8iLCAiaHR0cHM6Ly9oZHRpbWUub3JnLyIsICJodHRwczovL2hkdmlkZW8ub25lLyIsICJodHRwczovL2hoYW5jbHViLnRvcC8iLCAiaHR0cHM6Ly93d3cuaHRwdC5jYyIsICJodHRwczovL2h1ZGJ0Lmh1c3QuZWR1LmNuLyIsICJodHRwczovL2lhbm9uLmFwcC8iLCAiaHR0cDovL2loZGJpdHMubWUvIiwgImh0dHBzOi8vaXB0b3JyZW50cy5jb20vIiwgImh0dHBzOi8vd3d3LmpveWhkLm5ldCIsICJodHRwczovL2pwb3BzdWtpLmV1LyIsICJodHRwczovL2pwdHYuY2x1Yi8iLCAiaHR0cHM6Ly9qcHR2dHMudXMvIiwgImh0dHBzOi8va2FtZXB0LmNvbS8iLCAiaHR0cHM6Ly9rYXJhZ2FyZ2EuaW4vIiwgImh0dHBzOi8va2ltb2ppLmNsdWIvIiwgImh0dHBzOi8va3VmZWkub3JnIiwgImh0dHBzOi8va3VmaXJjLmNvbS8iLCAiaHR0cHM6Ly9sZWFybmZsYWtlcy5uZXQvIiwgImh0dHBzOi8vbGVhdmVzLnJlZC8iLCAiaHR0cHM6Ly9sb2dpbi5zdXBlcmJpdHMub3JnLyIsICJodHRwczovL2xvc3NsZXNzY2x1Yi5jb20vIiwgImh0dHBzOi8vbHN0LmdnLyIsICJodHRwczovL2x6dHIubWUvIiwgImh0dHBzOi8vbW9uaWthZGVzaWduLnVrLyIsICJodHRwczovL25hbnlhbmdwdC5jb20vIiwgImh0dHBzOi8vbmNvcmUucHJvLyIsICJodHRwczovL25lYnVsYW5jZS5pby8iLCAiaHR0cHM6Ly93d3cubmljZXB0Lm5ldC8iLCAiaHR0cHM6Ly9ucHVwdC5jb20vIiwgImh0dHBzOi8vb2xkdG9vbnMud29ybGQvIiwgImh0dHBzOi8vb3Blbi5jZC8iLCAiaHR0cHM6Ly9vcnBoZXVzLm5ldHdvcmsvIiwgImh0dHBzOi8vb3VyYml0cy5jbHViLyIsICJodHRwczovL3BhbmRhcHQubmV0IiwgImh0dHBzOi8vcGFzc3RoZXBvcGNvcm4ubWUvIiwgImh0dHBzOi8vcGlnZ28ubWUvIiwgImh0dHBzOi8vcHQuMGZmLmNjLyIsICJodHRwczovL3B0LjJ4ZnJlZS5vcmcvIiwgImh0dHBzOi8vcHQuYnRzY2hvb2wuY2x1Yi8iLCAiaHR0cHM6Ly9wdC5kaHRjbHViLmNvbS8iLCAiaHR0cHM6Ly9wdC5lYXN0Z2FtZS5vcmcvIiwgImh0dHBzOi8vcHQuZ3RrLnB3LyIsICJodHRwczovL3B0LmhkNGZhbnMub3JnIiwgImh0dHBzOi8vcHQuaGRiZC51cyIsICJodHRwczovL3B0LmhkcG9zdC50b3AvIiwgImh0dHBzOi8vcHQuaGR1cHQuY29tLyIsICJodHRwczovL3B0Lml0em14LmNvbS8iLCAiaHR0cHM6Ly9wdC5rZWVwZnJkcy5jb20vIiwgImh0dHBzOi8vcHQubmV3d29ybGQucGx1cy8iLCAiaHR0cHM6Ly9wdC5zanR1LmVkdS5jbi8iLCAiaHR0cHM6Ly9wdC5zb3Vsdm9pY2UuY2x1Yi8iLCAiaHR0cDovL3B0LnhhdWF0Ni5lZHUuY24vIiwgImh0dHA6Ly9wdC56aGl4aW5nLmJqdHUuZWR1LmNuLyIsICJodHRwczovL3B0Y2FmZS5jbHViLyIsICJodHRwczovL3B0Y2hkYml0cy5jby8iLCAiaHR0cHM6Ly9wdGNoaW5hLm9yZy8iLCAiaHR0cHM6Ly9wdGVyY2x1Yi5jb20vIiwgImh0dHBzOi8vcHRob21lLm5ldC8iLCAiaHR0cHM6Ly9wdHNiYW8uY2x1Yi8iLCAiaHR0cHM6Ly9wdHZpY29tby5uZXQvIiwgImh0dHBzOi8vcHVzc3l0b3JyZW50cy5vcmcvIiwgImh0dHBzOi8vcWluZ3dhcHQuY29tLyIsICJodHRwczovL3JlZGFjdGVkLmNoLyIsICJodHRwOi8vcmVzb3VyY2UueGlkaWFuLmVkdS5jbi8iLCAiaHR0cHM6Ly9yb3VzaS56aXAiLCAiaHR0cHM6Ly9ydXRyYWNrZXIub3JnLyIsICJodHRwczovL3NkYml0cy5vcmcvIiwgImh0dHBzOi8vc2hhZG93dGhlaW4ubmV0LyIsICJodHRwczovL3NoYXJlLmlsb2xpY29uLmNvbS8iLCAiaHR0cHM6Ly9zaGFya3B0Lm5ldCIsICJodHRwczovL3NwZWVkYXBwLmlvLyIsICJodHRwczovL3Nwb3J0c2N1bHQub3JnLyIsICJodHRwczovL3NwcmluZ3N1bmRheS5uZXQvIiwgImh0dHBzOi8vc3Rhci1zcGFjZS5uZXQvIiwgImh0dHBzOi8vc3Vnb2ltdXNpYy5tZS8iLCAiaHR0cHM6Ly90LnRvc2t5LmNsdWIiLCAiaHR0cHM6Ly90ZWFtaGQub3JnLyIsICJodHRwczovL3RlbGx5Lnd0Zi8iLCAiaHR0cHM6Ly90aGVnZWVrcy5jbGljayIsICJodHRwczovL3RqdXB0Lm9yZy8iLCAiaHR0cHM6Ly90b3RoZWdsb3J5LmltLyIsICJodHRwczovL3UyLmRtaHkub3JnLyIsICJodHRwczovL3ViaXRzLmNsdWIvIiwgImh0dHBzOi8vdWhkYml0cy5vcmcvIiwgImh0dHBzOi8vdWx0cmFoZC5uZXQiLCAiaHR0cHM6Ly93aW50ZXJzYWt1cmEubmV0LyIsICJodHRwczovL3dvcmxkLWluLWhkLm5ldC8iLCAiaHR0cHM6Ly93dWtvbmd3ZW5kYW8udG9wLyIsICJodHRwczovL3d3dy5hZ3N2cHQuY29tLyIsICJodHRwczovL3d3dy5iZWl0YWkucHQvIiwgImh0dHBzOi8vd3d3LmNpbmVtYXRpay5uZXQvIiwgImh0dHBzOi8vd3d3LmVtcG9ybml1bS5pcy8iLCAiaHR0cHM6Ly93d3cuZmlsZXB0LmNvbS8iLCAiaHR0cHM6Ly93d3cuZ2FtZWdhbWVwdC5jb20vIiwgImh0dHBzOi8vd3d3LmdheXRvci5yZW50LyIsICJodHRwczovL3d3dy5oYWlkYW4udmlkZW8vIiwgImh0dHBzOi8vd3d3LmhhcHB5ZmFwcHkub3JnLyIsICJodHRwczovL3d3dy5oZGt5bC5pbiIsICJodHRwczovL3d3dy5oaXRwdC5jb20vIiwgImh0dHBzOi8vd3d3LmljYzIwMjIuY29tLyIsICJodHRwczovL3d3dy5tb3JldGhhbnR2Lm1lIiwgImh0dHBzOi8vd3d3Lm15YW5vbmFtb3VzZS5uZXQvIiwgImh0dHBzOi8vd3d3Lm9rcHQubmV0LyIsICJodHRwczovL3d3dy5vc2hlbi53aW4vIiwgImh0dHBzOi8vd3d3LnB0bHNwLmNvbS8iLCAiaHR0cHM6Ly93d3cucHR0aW1lLm9yZy8iLCAiaHR0cHM6Ly93d3cuc2t5ZXkyLmNvbS8iLCAiaHR0cHM6Ly93d3cudG9ycmVudGRheS5jb20vIiwgImh0dHBzOi8vd3d3LnRvcnJlbnRsZWVjaC5vcmcvIiwgImh0dHBzOi8vd3d3LnRvcnJlbnRzZWVkcy5vcmcvIiwgImh0dHBzOi8vd3d3LnRyYW5jZXRyYWZmaWMuY29tLyIsICJodHRwczovL3hpbmd0YW4ub25lLyIsICJodHRwczovL2twLm0tdGVhbS5jYy8iLCAiaHR0cHM6Ly96aHVxdWUuaW4vIiwgImh0dHBzOi8vem1wdC5jYy8iXQ=='));
const cookieEngine = (url, cookies) => {
    const cookieList = cookies.split("; ");
    cookieList.forEach(item => {
        const args = item.split("=");
        chrome.cookies.set({
            url: url,
            name: args[0],
            path: '/',
            value: args[1],
            httpOnly: true,
            expirationDate: (new Date().getTime() + 2592000000) / 1000,
            secure: false,
            storeId: '0',
            sameSite: 'unspecified',
        }, _cookie => {
            const status = document.getElementById("status");
            status.value = _cookie ? "Successful!" : "Failed!";
        });
    });
};

const hook = () => {
    const url = document.getElementById("url").value;
    const cookie = document.getElementById("cookie").value;
    cookieEngine(url, cookie);
};


const backup = () => {
    const results = {};
    const fetchCookies = (url, index) => {
        chrome.cookies.getAll({ url }, cookies => {
        console.log(cookies.length)
        if (cookies.length != 0) {
				results[url] = {
					cookies: cookies,
					cookieStr: cookies.map(item => `${item.name}=${item.value}`).join('; ')
				};
			} else {
				delete results[url];
				}
			if (index === urls.length - 1) {
				console.log(results);
				navigator.clipboard.writeText(JSON.stringify(results, null, "\t"))
					.then(() => {
						alert('Cookie backup successful! Copied to clipboard.');
					})
					.catch(err => {
						console.error('An error occurred while copying cookies:', err);
					});
			}
        });
    };
    urls.forEach((url, index) => {
        results[url] = { cookies: '', cookieStr: '' };
        fetchCookies(url, index);
    });
};

try{
document.getElementById("hook").addEventListener("click", hook);
}
catch(w) {
}
try{
document.getElementById("backup").addEventListener("click", backup);
}
catch(w) {
}

