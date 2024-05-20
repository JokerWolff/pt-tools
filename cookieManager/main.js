const urls = JSON.parse(atob('WyJodHRwczovLzFwdGJhLmNvbS8iLCJodHRwczovLzUycHQuc2l0ZS8iLCJodHRwczovL2FidG9ycmVudHMubWUvIiwiaHR0cHM6Ly9haWRvcnUtb25saW5lLm1lLyIsImh0dHBzOi8vYWl0aGVyLmNjLyIsImh0dHBzOi8vYWxwaGFyYXRpby5jYy8iLCJodHRwczovL2FuaW1lYnl0ZXMudHYvIiwiaHR0cHM6Ly9hbnRoZWxpb24ubWUiLCJodHRwczovL2FzaWFuY2luZW1hLm1lLyIsImh0dHBzOi8vYXVkaWVuY2VzLm1lLyIsImh0dHBzOi8vYXVkaW9uZXdzLm9yZy8iLCJodHRwczovL2F6dXNhLndpa2kiLCJodHRwczovL2JhY29uYml0cy5vcmcvIiwiaHR0cHM6Ly9iZW1hbmlzby53cy8iLCJodHRwczovL2JleW9uZC1oZC5tZS8iLCJodHRwczovL2JpYmxpb3Rpay5tZS8iLCJodHRwczovL2JpdGJyLmNjLyIsImh0dHBzOi8vYml0cHQuY24vIiwiaHR0cHM6Ly9ibHV0b3BpYS5jYy8iLCJodHRwczovL2Jyb2FkY2FzdGhlLm5ldC8iLCJodHRwczovL2Jyb2tlbnN0b25lcy5pcyIsImh0dHA6Ly9idC5uZXU2LmVkdS5jbi8iLCJodHRwczovL2J3dG9ycmVudHMudHYvIiwiaHR0cHM6Ly9ieXIucHQvIiwiaHR0cHM6Ly9jYXJwdC5uZXQvIiwiaHR0cHM6Ly9jY2ZiaXRzLm9yZy8iLCJodHRwczovL2NncGVlcnMudG8vIiwiaHR0cHM6Ly9jaW5lbWFnZWRkb24ubmV0LyIsImh0dHBzOi8vY2x1Yi5oYXJlcy50b3AvIiwiaHR0cHM6Ly9jbmxhbmcub3JnLyIsImh0dHBzOi8vY29uY2VydG9zLmxpdmUvIiwiaHR0cHM6Ly9jeWFuYnVnLm5ldCIsImh0dHBzOi8vZGFqaWFvLmN5b3UvIiwiaHR0cHM6Ly9kZXNpdG9ycmVudHMudHYvIiwiaHR0cHM6Ly9kaWNtdXNpYy5jb20vIiwiaHR0cHM6Ly9kaWdpdGFsY29yZS5jbHViLyIsImh0dHBzOi8vZGlzY2Zhbi5uZXQvIiwiaHR0cHM6Ly9wdC5lY3VzdC5wcC51YS8iLCJodHRwczovL2V0OC5vcmcvIiwiaHR0cHM6Ly9leHRyZW1seW10b3JyZW50cy53cy8iLCJodHRwczovL2ZlbWRvbWN1bHQub3JnLyIsImh0dHBzOi8vZmlsZWxpc3QuaW8vIiwiaHR0cHM6Ly9mc20ubmFtZS8iLCJodHRwczovL2dheS10b3JyZW50cy5vcmcvIiwiaHR0cHM6Ly9nYXplbGxlZ2FtZXMubmV0LyIsImh0dHBzOi8vZ2Z4cGVlcnMubmV0LyIsImh0dHBzOi8vZ3JlYXRwb3N0ZXJ3YWxsLmNvbS8iLCJodHRwczovL2hhd2tlLnVuby8iLCJodHRwczovL2hkLXNwYWNlLm9yZy8iLCJodHRwczovL2hkLXRvcnJlbnRzLm9yZy8iLCJodHRwczovL2hkYXJlYS5jbHViLyIsImh0dHBzOi8vaGRhdG1vcy5jbHViIiwiaHR0cHM6Ly9oZGJpdHMub3JnLyIsImh0dHBzOi8vaGRjaGluYS5vcmcvIiwiaHR0cHM6Ly9oZGNpdHkuY2l0eS8iLCJodHRwczovL3d3dy5oZGRvbGJ5LmNvbS8iLCJodHRwczovL2hkZi53b3JsZC8iLCJodHRwczovL2hkZmFucy5vcmciLCJodHRwczovL2hkZnVuLm1lLyIsImh0dHBzOi8vaGRob21lLm9yZy8iLCJodHRwOi8vaGRtYXlpLmNvbS8iLCJodHRwczovL2hkcHQueHl6LyIsImh0dHA6Ly9oZHJvdXRlLm9yZy8iLCJodHRwczovL2hkc2t5Lm1lLyIsImh0dHBzOi8vaGR0aW1lLm9yZy8iLCJodHRwczovL2hkdmlkZW8ub25lLyIsImh0dHBzOi8vaGhhbmNsdWIudG9wLyIsImh0dHBzOi8vd3d3Lmh0cHQuY2MiLCJodHRwczovL2h1ZGJ0Lmh1c3QuZWR1LmNuLyIsImh0dHBzOi8vaWFub24uYXBwLyIsImh0dHA6Ly9paGRiaXRzLm1lLyIsImh0dHBzOi8vaXB0b3JyZW50cy5jb20vIiwiaHR0cHM6Ly93d3cuam95aGQubmV0IiwiaHR0cHM6Ly9qcG9wc3VraS5ldS8iLCJodHRwczovL2pwdHYuY2x1Yi8iLCJodHRwczovL2pwdHZ0cy51cy8iLCJodHRwczovL2thbWVwdC5jb20vIiwiaHR0cHM6Ly9rYXJhZ2FyZ2EuaW4vIiwiaHR0cHM6Ly9raW1vamkuY2x1Yi8iLCJodHRwczovL2t1ZmVpLm9yZyIsImh0dHBzOi8va3VmaXJjLmNvbS8iLCJodHRwczovL2xlYXJuZmxha2VzLm5ldC8iLCJodHRwczovL2xlYXZlcy5yZWQvIiwiaHR0cHM6Ly9sb2dpbi5zdXBlcmJpdHMub3JnLyIsImh0dHBzOi8vbG9zc2xlc3NjbHViLmNvbS8iLCJodHRwczovL2xzdC5nZy8iLCJodHRwczovL2x6dHIubWUvIiwiaHR0cHM6Ly9tb25pa2FkZXNpZ24udWsvIiwiaHR0cHM6Ly9uYW55YW5ncHQuY29tLyIsImh0dHBzOi8vbmNvcmUucHJvLyIsImh0dHBzOi8vbmVidWxhbmNlLmlvLyIsImh0dHBzOi8vd3d3Lm5pY2VwdC5uZXQvIiwiaHR0cHM6Ly9ucHVwdC5jb20vIiwiaHR0cHM6Ly9vbGR0b29ucy53b3JsZC8iLCJodHRwczovL29wZW4uY2QvIiwiaHR0cHM6Ly9vcnBoZXVzLm5ldHdvcmsvIiwiaHR0cHM6Ly9vdXJiaXRzLmNsdWIvIiwiaHR0cHM6Ly9wYW5kYXB0Lm5ldCIsImh0dHBzOi8vcGFzc3RoZXBvcGNvcm4ubWUvIiwiaHR0cHM6Ly9waWdnby5tZS8iLCJodHRwczovL3B0LjBmZi5jYy8iLCJodHRwczovL3B0LjJ4ZnJlZS5vcmcvIiwiaHR0cHM6Ly9wdC5idHNjaG9vbC5jbHViLyIsImh0dHBzOi8vcHQuZGh0Y2x1Yi5jb20vIiwiaHR0cHM6Ly9wdC5lYXN0Z2FtZS5vcmcvIiwiaHR0cHM6Ly9wdC5ndGsucHcvIiwiaHR0cHM6Ly9wdC5oZDRmYW5zLm9yZyIsImh0dHBzOi8vcHQuaGRiZC51cyIsImh0dHBzOi8vcHQuaGRwb3N0LnRvcC8iLCJodHRwczovL3B0LmhkdXB0LmNvbS8iLCJodHRwczovL3B0Lml0em14LmNvbS8iLCJodHRwczovL3B0LmtlZXBmcmRzLmNvbS8iLCJodHRwczovL3B0Lm5ld3dvcmxkLnBsdXMvIiwiaHR0cHM6Ly9wdC5zanR1LmVkdS5jbi8iLCJodHRwczovL3B0LnNvdWx2b2ljZS5jbHViLyIsImh0dHA6Ly9wdC54YXVhdDYuZWR1LmNuLyIsImh0dHA6Ly9wdC56aGl4aW5nLmJqdHUuZWR1LmNuLyIsImh0dHBzOi8vcHRjYWZlLmNsdWIvIiwiaHR0cHM6Ly9wdGNoZGJpdHMuY28vIiwiaHR0cHM6Ly9wdGNoaW5hLm9yZy8iLCJodHRwczovL3B0ZXJjbHViLmNvbS8iLCJodHRwczovL3B0aG9tZS5uZXQvIiwiaHR0cHM6Ly9wdHNiYW8uY2x1Yi8iLCJodHRwczovL3B0dmljb21vLm5ldC8iLCJodHRwczovL3B1c3N5dG9ycmVudHMub3JnLyIsImh0dHBzOi8vcWluZ3dhcHQuY29tLyIsImh0dHBzOi8vcmVkYWN0ZWQuY2gvIiwiaHR0cDovL3Jlc291cmNlLnhpZGlhbi5lZHUuY24vIiwiaHR0cHM6Ly9yb3VzaS56aXAiLCJodHRwczovL3J1dHJhY2tlci5vcmcvIiwiaHR0cHM6Ly9zZGJpdHMub3JnLyIsImh0dHBzOi8vc2hhZG93dGhlaW4ubmV0LyIsImh0dHBzOi8vc2hhcmUuaWxvbGljb24uY29tLyIsImh0dHBzOi8vc2hhcmtwdC5uZXQiLCJodHRwczovL3NwZWVkYXBwLmlvLyIsImh0dHBzOi8vc3BvcnRzY3VsdC5vcmcvIiwiaHR0cHM6Ly9zcHJpbmdzdW5kYXkubmV0LyIsImh0dHBzOi8vc3Rhci1zcGFjZS5uZXQvIiwiaHR0cHM6Ly9zdWdvaW11c2ljLm1lLyIsImh0dHBzOi8vdGVhbWhkLm9yZy8iLCJodHRwczovL3RlbGx5Lnd0Zi8iLCJodHRwczovL3RoZWdlZWtzLmNsaWNrIiwiaHR0cHM6Ly90anVwdC5vcmcvIiwiaHR0cHM6Ly90b3RoZWdsb3J5LmltLyIsImh0dHBzOi8vdTIuZG1oeS5vcmcvIiwiaHR0cHM6Ly91Yml0cy5jbHViLyIsImh0dHBzOi8vdWhkYml0cy5vcmcvIiwiaHR0cHM6Ly91bHRyYWhkLm5ldCIsImh0dHBzOi8vd2ludGVyc2FrdXJhLm5ldC8iLCJodHRwczovL3dvcmxkLWluLWhkLm5ldC8iLCJodHRwczovL3d1a29uZ3dlbmRhby50b3AvIiwiaHR0cHM6Ly93d3cuYWdzdnB0LmNvbS8iLCJodHRwczovL3d3dy5iZWl0YWkucHQvIiwiaHR0cHM6Ly93d3cuY2luZW1hdGlrLm5ldC8iLCJodHRwczovL3d3dy5lbXBvcm5pdW0uaXMvIiwiaHR0cHM6Ly93d3cuZmlsZXB0LmNvbS8iLCJodHRwczovL3d3dy5nYW1lZ2FtZXB0LmNvbS8iLCJodHRwczovL3d3dy5nYXl0b3IucmVudC8iLCJodHRwczovL3d3dy5oYWlkYW4udmlkZW8vIiwiaHR0cHM6Ly93d3cuaGFwcHlmYXBweS5vcmcvIiwiaHR0cHM6Ly93d3cuaGRreWwuaW4iLCJodHRwczovL3d3dy5oaXRwdC5jb20vIiwiaHR0cHM6Ly93d3cuaWNjMjAyMi5jb20vIiwiaHR0cHM6Ly93d3cubW9yZXRoYW50di5tZSIsImh0dHBzOi8vd3d3Lm15YW5vbmFtb3VzZS5uZXQvIiwiaHR0cHM6Ly93d3cub2twdC5uZXQvIiwiaHR0cHM6Ly93d3cub3NoZW4ud2luLyIsImh0dHBzOi8vd3d3LnB0bHNwLmNvbS8iLCJodHRwczovL3d3dy5wdHRpbWUub3JnLyIsImh0dHBzOi8vd3d3LnNreWV5Mi5jb20vIiwiaHR0cHM6Ly93d3cudG9ycmVudGRheS5jb20vIiwiaHR0cHM6Ly93d3cudG9ycmVudGxlZWNoLm9yZy8iLCJodHRwczovL3d3dy50b3JyZW50c2VlZHMub3JnLyIsImh0dHBzOi8vd3d3LnRyYW5jZXRyYWZmaWMuY29tLyIsImh0dHBzOi8veGluZ3Rhbi5vbmUvIiwiaHR0cHM6Ly9rcC5tLXRlYW0uY2MvIiwiaHR0cHM6Ly96aHVxdWUuaW4vIiwiaHR0cHM6Ly96bXB0LmNjLyJd'));

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

